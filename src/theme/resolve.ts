import type { ThemeColors, ThemeState } from './types';
import { CUSTOM_THEME_ID, DEFAULT_THEME_ID } from './types';
import { getPresetColors, PRESET_BY_ID } from './presets';

export function resolveColors(state: ThemeState): ThemeColors {
  if (state.activeId === CUSTOM_THEME_ID && state.custom) {
    return state.custom;
  }
  return getPresetColors(state.activeId);
}

export function resolveMode(state: ThemeState): 'dark' | 'light' {
  if (state.activeId === CUSTOM_THEME_ID && state.custom) {
    // approximate from bg
    const hex = state.custom.bgApp.replace('#', '');
    if (hex.length >= 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55 ? 'light' : 'dark';
    }
    return 'dark';
  }
  return PRESET_BY_ID[state.activeId]?.mode ?? PRESET_BY_ID[DEFAULT_THEME_ID].mode;
}

export function cloneColors(c: ThemeColors): ThemeColors {
  return { ...c };
}
