export type ThemeMode = 'dark' | 'light';

export type ThemeColors = {
  bgApp: string;
  bgSidebar: string;
  bgHeader: string;
  bgElevated: string;
  bgHover: string;
  border: string;
  borderStrong: string;
  fg: string;
  fgMuted: string;
  fgDim: string;
  fgFaint: string;
  fgBright: string;
  accent: string;
  accentHover: string;
  danger: string;
  dangerHover: string;
  warn: string;
  running: string;
  gitAdd: string;
  gitMod: string;
  gitDel: string;
  folder: string;
  diffAdd: string;
  diffAddBg: string;
  diffDel: string;
  diffDelBg: string;
  diffHeader: string;
  termBg: string;
  termFg: string;
  termCursor: string;
  termCursorAccent: string;
  termSelection: string;
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
  brightBlack: string;
  brightRed: string;
  brightGreen: string;
  brightYellow: string;
  brightBlue: string;
  brightMagenta: string;
  brightCyan: string;
  brightWhite: string;
  editorBg: string;
  editorFg: string;
  editorSelection: string;
  editorCursor: string;
  editorLineHighlight: string;
  editorComment: string;
  editorKeyword: string;
  editorString: string;
  editorFunction: string;
  editorNumber: string;
  editorType: string;
  editorOperator: string;
  editorPunctuation: string;
};

export type ThemeDefinition = {
  id: string;
  name: string;
  mode: ThemeMode;
  colors: ThemeColors;
};

export type ThemeState = {
  activeId: string;
  custom: ThemeColors | null;
};

/** Core tokens shown in the custom builder (not collapsed). */
export const CORE_TOKEN_KEYS = [
  'bgApp',
  'bgSidebar',
  'bgHeader',
  'bgElevated',
  'border',
  'fg',
  'fgMuted',
  'fgBright',
  'accent',
  'warn',
  'danger',
  'gitAdd',
  'gitMod',
  'gitDel',
  'diffAdd',
  'diffDel',
  'termBg',
  'termFg',
  'termCursor',
  'termSelection',
] as const satisfies readonly (keyof ThemeColors)[];

export type CoreTokenKey = (typeof CORE_TOKEN_KEYS)[number];

export const CORE_TOKEN_LABELS: Record<CoreTokenKey, string> = {
  bgApp: 'App background',
  bgSidebar: 'Sidebar',
  bgHeader: 'Header / elevated bar',
  bgElevated: 'Cards / elevated',
  border: 'Border',
  fg: 'Foreground',
  fgMuted: 'Muted text',
  fgBright: 'Bright text',
  accent: 'Accent',
  warn: 'Warning',
  danger: 'Danger',
  gitAdd: 'Git added',
  gitMod: 'Git modified',
  gitDel: 'Git deleted',
  diffAdd: 'Diff add',
  diffDel: 'Diff delete',
  termBg: 'Terminal background',
  termFg: 'Terminal foreground',
  termCursor: 'Cursor',
  termSelection: 'Selection',
};

export const ANSI_TOKEN_KEYS = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'brightBlack',
  'brightRed',
  'brightGreen',
  'brightYellow',
  'brightBlue',
  'brightMagenta',
  'brightCyan',
  'brightWhite',
] as const satisfies readonly (keyof ThemeColors)[];

export const EDITOR_TOKEN_KEYS = [
  'editorBg',
  'editorFg',
  'editorSelection',
  'editorCursor',
  'editorLineHighlight',
  'editorComment',
  'editorKeyword',
  'editorString',
  'editorFunction',
  'editorNumber',
  'editorType',
  'editorOperator',
  'editorPunctuation',
] as const satisfies readonly (keyof ThemeColors)[];

export const CUSTOM_THEME_ID = 'custom';
export const DEFAULT_THEME_ID = 'tux-dark';
