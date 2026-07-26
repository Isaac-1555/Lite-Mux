import { load, type Store } from '@tauri-apps/plugin-store';
import type { ThemeColors, ThemeState } from './types';
import { CUSTOM_THEME_ID, DEFAULT_THEME_ID } from './types';
import { PRESET_BY_ID } from './presets';

const STORE_FILE = 'theme.json';
const KEY = 'theme';

let store: Store | null = null;

async function getStore(): Promise<Store> {
  if (!store) {
    store = await load(STORE_FILE);
  }
  return store;
}

function isHexLike(v: unknown): v is string {
  return typeof v === 'string' && v.length > 0;
}

function parseColors(raw: unknown): ThemeColors | null {
  if (!raw || typeof raw !== 'object') return null;
  const o = raw as Record<string, unknown>;
  // Require a handful of core keys
  const required: (keyof ThemeColors)[] = [
    'bgApp', 'bgSidebar', 'fg', 'accent', 'termBg', 'termFg',
    'black', 'red', 'green', 'editorBg', 'editorFg',
  ];
  for (const k of required) {
    if (!isHexLike(o[k])) return null;
  }
  // Accept full object; missing keys fall back to tux-dark
  const base = PRESET_BY_ID[DEFAULT_THEME_ID].colors;
  const result = { ...base };
  for (const key of Object.keys(base) as (keyof ThemeColors)[]) {
    if (isHexLike(o[key])) {
      result[key] = o[key] as string;
    }
  }
  return result;
}

export async function loadTheme(): Promise<ThemeState> {
  try {
    const s = await getStore();
    const raw = await s.get<Record<string, unknown>>(KEY);
    if (!raw || typeof raw !== 'object') {
      return { activeId: DEFAULT_THEME_ID, custom: null };
    }
    let activeId = typeof raw.activeId === 'string' ? raw.activeId : DEFAULT_THEME_ID;
    const custom = parseColors(raw.custom);
    if (activeId !== CUSTOM_THEME_ID && !PRESET_BY_ID[activeId]) {
      activeId = DEFAULT_THEME_ID;
    }
    if (activeId === CUSTOM_THEME_ID && !custom) {
      activeId = DEFAULT_THEME_ID;
    }
    return { activeId, custom };
  } catch (e) {
    console.error('Failed to load theme', e);
    return { activeId: DEFAULT_THEME_ID, custom: null };
  }
}

export async function saveTheme(state: ThemeState): Promise<void> {
  try {
    const s = await getStore();
    await s.set(KEY, {
      activeId: state.activeId,
      custom: state.custom,
    });
    await s.save();
  } catch (e) {
    console.error('Failed to save theme', e);
  }
}
