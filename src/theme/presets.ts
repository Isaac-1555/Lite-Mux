import type { ThemeColors, ThemeDefinition } from './types';
import { withAlpha } from './utils';

function tuxDark(): ThemeColors {
  return {
    bgApp: '#1e1e1e',
    bgSidebar: '#181818',
    bgHeader: '#252526',
    bgElevated: '#2a2a2a',
    bgHover: '#2a2d2e',
    border: '#333333',
    borderStrong: '#3c3c3c',
    fg: '#d4d4d4',
    fgMuted: '#888888',
    fgDim: '#666666',
    fgFaint: '#555555',
    fgBright: '#ffffff',
    accent: '#5865f2',
    accentHover: '#4752c4',
    danger: '#a12628',
    dangerHover: '#c4353a',
    warn: '#f3c03c',
    running: '#f5a623',
    gitAdd: '#73c991',
    gitMod: '#e2c08d',
    gitDel: '#f14c4c',
    folder: '#dcb67a',
    diffAdd: '#2ea043',
    diffAddBg: withAlpha('#2ea043', 0.15),
    diffDel: '#f85149',
    diffDelBg: withAlpha('#f85149', 0.15),
    diffHeader: '#7ee787',
    termBg: '#1e1e1e',
    termFg: '#d4d4d4',
    termCursor: '#d4d4d4',
    termCursorAccent: '#1e1e1e',
    termSelection: withAlpha('#5865f2', 0.4),
    black: '#1e1e1e',
    red: '#f14c4c',
    green: '#73c991',
    yellow: '#e2c08d',
    blue: '#569cd6',
    magenta: '#c586c0',
    cyan: '#4ec9b0',
    white: '#d4d4d4',
    brightBlack: '#808080',
    brightRed: '#f14c4c',
    brightGreen: '#73c991',
    brightYellow: '#e2c08d',
    brightBlue: '#569cd6',
    brightMagenta: '#c586c0',
    brightCyan: '#4ec9b0',
    brightWhite: '#ffffff',
    editorBg: '#1e1e1e',
    editorFg: '#d4d4d4',
    editorSelection: withAlpha('#264f78', 0.99),
    editorCursor: '#aeafad',
    editorLineHighlight: '#2a2a2a',
    editorComment: '#6a9955',
    editorKeyword: '#569cd6',
    editorString: '#ce9178',
    editorFunction: '#dcdcaa',
    editorNumber: '#b5cea8',
    editorType: '#4ec9b0',
    editorOperator: '#d4d4d4',
    editorPunctuation: '#d4d4d4',
  };
}

/** Catppuccin palette builder */
function catppuccin(
  base: {
    base: string;
    mantle: string;
    crust: string;
    surface0: string;
    surface1: string;
    surface2: string;
    overlay0: string;
    overlay1: string;
    overlay2: string;
    text: string;
    subtext0: string;
    subtext1: string;
    lavender: string;
    blue: string;
    sapphire: string;
    sky: string;
    teal: string;
    green: string;
    yellow: string;
    peach: string;
    maroon: string;
    red: string;
    mauve: string;
    pink: string;
    flamingo: string;
    rosewater: string;
  },
): ThemeColors {
  return {
    bgApp: base.base,
    bgSidebar: base.mantle,
    bgHeader: base.surface0,
    bgElevated: base.surface0,
    bgHover: base.surface1,
    border: base.surface1,
    borderStrong: base.surface2,
    fg: base.text,
    fgMuted: base.overlay1,
    fgDim: base.overlay0,
    fgFaint: base.surface2,
    fgBright: base.text,
    accent: base.blue,
    accentHover: base.sapphire,
    danger: base.red,
    dangerHover: base.maroon,
    warn: base.yellow,
    running: base.peach,
    gitAdd: base.green,
    gitMod: base.yellow,
    gitDel: base.red,
    folder: base.yellow,
    diffAdd: base.green,
    diffAddBg: withAlpha(base.green, 0.15),
    diffDel: base.red,
    diffDelBg: withAlpha(base.red, 0.15),
    diffHeader: base.teal,
    termBg: base.base,
    termFg: base.text,
    termCursor: base.rosewater,
    termCursorAccent: base.base,
    termSelection: withAlpha(base.overlay0, 0.5),
    black: base.surface1,
    red: base.red,
    green: base.green,
    yellow: base.yellow,
    blue: base.blue,
    magenta: base.pink,
    cyan: base.teal,
    white: base.subtext1,
    brightBlack: base.surface2,
    brightRed: base.red,
    brightGreen: base.green,
    brightYellow: base.yellow,
    brightBlue: base.blue,
    brightMagenta: base.pink,
    brightCyan: base.teal,
    brightWhite: base.text,
    editorBg: base.base,
    editorFg: base.text,
    editorSelection: withAlpha(base.surface2, 0.8),
    editorCursor: base.rosewater,
    editorLineHighlight: base.surface0,
    editorComment: base.overlay0,
    editorKeyword: base.mauve,
    editorString: base.green,
    editorFunction: base.blue,
    editorNumber: base.peach,
    editorType: base.yellow,
    editorOperator: base.sky,
    editorPunctuation: base.overlay2,
  };
}

const CAT_MOCHA = {
  base: '#1e1e2e',
  mantle: '#181825',
  crust: '#11111b',
  surface0: '#313244',
  surface1: '#45475a',
  surface2: '#585b70',
  overlay0: '#6c7086',
  overlay1: '#7f849c',
  overlay2: '#9399b2',
  text: '#cdd6f4',
  subtext0: '#a6adc8',
  subtext1: '#bac2de',
  lavender: '#b4befe',
  blue: '#89b4fa',
  sapphire: '#74c7ec',
  sky: '#89dceb',
  teal: '#94e2d5',
  green: '#a6e3a1',
  yellow: '#f9e2af',
  peach: '#fab387',
  maroon: '#eba0ac',
  red: '#f38ba8',
  mauve: '#cba6f7',
  pink: '#f5c2e7',
  flamingo: '#f2cdcd',
  rosewater: '#f5e0dc',
};

const CAT_MACCHIATO = {
  base: '#24273a',
  mantle: '#1e2030',
  crust: '#181926',
  surface0: '#363a4f',
  surface1: '#494d64',
  surface2: '#5b6078',
  overlay0: '#6e738d',
  overlay1: '#8087a2',
  overlay2: '#939ab7',
  text: '#cad3f5',
  subtext0: '#a5adcb',
  subtext1: '#b8c0e0',
  lavender: '#b7bdf8',
  blue: '#8aadf4',
  sapphire: '#7dc4e4',
  sky: '#91d7e3',
  teal: '#8bd5ca',
  green: '#a6da95',
  yellow: '#eed49f',
  peach: '#f5a97f',
  maroon: '#ee99a0',
  red: '#ed8796',
  mauve: '#c6a0f6',
  pink: '#f5bde6',
  flamingo: '#f0c6c6',
  rosewater: '#f4dbd6',
};

const CAT_FRAPPE = {
  base: '#303446',
  mantle: '#292c3c',
  crust: '#232634',
  surface0: '#414559',
  surface1: '#51576d',
  surface2: '#626880',
  overlay0: '#737994',
  overlay1: '#838ba7',
  overlay2: '#949cbb',
  text: '#c6d0f5',
  subtext0: '#a5adce',
  subtext1: '#b5bfe2',
  lavender: '#babbf1',
  blue: '#8caaee',
  sapphire: '#85c1dc',
  sky: '#99d1db',
  teal: '#81c8be',
  green: '#a6d189',
  yellow: '#e5c890',
  peach: '#ef9f76',
  maroon: '#ea999c',
  red: '#e78284',
  mauve: '#ca9ee6',
  pink: '#f4b8e4',
  flamingo: '#eebebe',
  rosewater: '#f2d5cf',
};

const CAT_LATTE = {
  base: '#eff1f5',
  mantle: '#e6e9ef',
  crust: '#dce0e8',
  surface0: '#ccd0da',
  surface1: '#bcc0cc',
  surface2: '#acb0be',
  overlay0: '#9ca0b0',
  overlay1: '#8c8fa1',
  overlay2: '#7c7f93',
  text: '#4c4f69',
  subtext0: '#6c6f85',
  subtext1: '#5c5f77',
  lavender: '#7287fd',
  blue: '#1e66f5',
  sapphire: '#209fb5',
  sky: '#04a5e5',
  teal: '#179299',
  green: '#40a02b',
  yellow: '#df8e1d',
  peach: '#fe640b',
  maroon: '#e64553',
  red: '#d20f39',
  mauve: '#8839ef',
  pink: '#ea76cb',
  flamingo: '#dd7878',
  rosewater: '#dc8a78',
};

function everforest(
  p: {
    bg: string;
    bg0: string;
    bg1: string;
    bg2: string;
    bg3: string;
    fg: string;
    grey0: string;
    grey1: string;
    grey2: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    aqua: string;
    blue: string;
    purple: string;
  },
): ThemeColors {
  return {
    bgApp: p.bg,
    bgSidebar: p.bg0,
    bgHeader: p.bg1,
    bgElevated: p.bg1,
    bgHover: p.bg2,
    border: p.bg2,
    borderStrong: p.bg3,
    fg: p.fg,
    fgMuted: p.grey1,
    fgDim: p.grey0,
    fgFaint: p.bg3,
    fgBright: p.fg,
    accent: p.green,
    accentHover: p.aqua,
    danger: p.red,
    dangerHover: p.orange,
    warn: p.yellow,
    running: p.orange,
    gitAdd: p.green,
    gitMod: p.yellow,
    gitDel: p.red,
    folder: p.yellow,
    diffAdd: p.green,
    diffAddBg: withAlpha(p.green, 0.15),
    diffDel: p.red,
    diffDelBg: withAlpha(p.red, 0.15),
    diffHeader: p.aqua,
    termBg: p.bg,
    termFg: p.fg,
    termCursor: p.fg,
    termCursorAccent: p.bg,
    termSelection: withAlpha(p.bg3, 0.6),
    black: p.bg1,
    red: p.red,
    green: p.green,
    yellow: p.yellow,
    blue: p.blue,
    magenta: p.purple,
    cyan: p.aqua,
    white: p.grey2,
    brightBlack: p.grey0,
    brightRed: p.red,
    brightGreen: p.green,
    brightYellow: p.yellow,
    brightBlue: p.blue,
    brightMagenta: p.purple,
    brightCyan: p.aqua,
    brightWhite: p.fg,
    editorBg: p.bg,
    editorFg: p.fg,
    editorSelection: withAlpha(p.bg3, 0.7),
    editorCursor: p.fg,
    editorLineHighlight: p.bg1,
    editorComment: p.grey1,
    editorKeyword: p.red,
    editorString: p.green,
    editorFunction: p.aqua,
    editorNumber: p.purple,
    editorType: p.yellow,
    editorOperator: p.orange,
    editorPunctuation: p.grey2,
  };
}

const EF_DARK = {
  bg: '#2d353b',
  bg0: '#232a2e',
  bg1: '#343f44',
  bg2: '#3d484d',
  bg3: '#475258',
  fg: '#d3c6aa',
  grey0: '#7a8478',
  grey1: '#859289',
  grey2: '#9da9a0',
  red: '#e67e80',
  orange: '#e69875',
  yellow: '#dbbc7f',
  green: '#a7c080',
  aqua: '#83c092',
  blue: '#7fbbb3',
  purple: '#d699b6',
};

const EF_LIGHT = {
  bg: '#fdf6e3',
  bg0: '#f4f0d9',
  bg1: '#efebd4',
  bg2: '#e6e2cc',
  bg3: '#ddd8be',
  fg: '#5c6a72',
  grey0: '#a6b0a0',
  grey1: '#939f91',
  grey2: '#829181',
  red: '#f85552',
  orange: '#f57d26',
  yellow: '#dfa000',
  green: '#8da101',
  aqua: '#35a77c',
  blue: '#3a94c5',
  purple: '#df69ba',
};

function nord(light: boolean): ThemeColors {
  // Nord polar night / snow storm
  const polar0 = '#2e3440';
  const polar1 = '#3b4252';
  const polar2 = '#434c5e';
  const polar3 = '#4c566a';
  const snow0 = '#d8dee9';
  const snow1 = '#e5e9f0';
  const snow2 = '#eceff4';
  const frost0 = '#8fbcbb';
  const frost1 = '#88c0d0';
  const frost2 = '#81a1c1';
  const frost3 = '#5e81ac';
  const aurora0 = '#bf616a';
  const aurora1 = '#d08770';
  const aurora2 = '#ebcb8b';
  const aurora3 = '#a3be8c';
  const aurora4 = '#b48ead';

  if (!light) {
    return {
      bgApp: polar0,
      bgSidebar: '#242933',
      bgHeader: polar1,
      bgElevated: polar1,
      bgHover: polar2,
      border: polar2,
      borderStrong: polar3,
      fg: snow0,
      fgMuted: polar3,
      fgDim: '#616e88',
      fgFaint: polar2,
      fgBright: snow2,
      accent: frost2,
      accentHover: frost3,
      danger: aurora0,
      dangerHover: aurora1,
      warn: aurora2,
      running: aurora1,
      gitAdd: aurora3,
      gitMod: aurora2,
      gitDel: aurora0,
      folder: aurora2,
      diffAdd: aurora3,
      diffAddBg: withAlpha(aurora3, 0.15),
      diffDel: aurora0,
      diffDelBg: withAlpha(aurora0, 0.15),
      diffHeader: frost0,
      termBg: polar0,
      termFg: snow0,
      termCursor: snow2,
      termCursorAccent: polar0,
      termSelection: withAlpha(frost3, 0.45),
      black: polar1,
      red: aurora0,
      green: aurora3,
      yellow: aurora2,
      blue: frost3,
      magenta: aurora4,
      cyan: frost1,
      white: snow0,
      brightBlack: polar3,
      brightRed: aurora0,
      brightGreen: aurora3,
      brightYellow: aurora2,
      brightBlue: frost2,
      brightMagenta: aurora4,
      brightCyan: frost0,
      brightWhite: snow2,
      editorBg: polar0,
      editorFg: snow0,
      editorSelection: withAlpha(polar3, 0.7),
      editorCursor: snow2,
      editorLineHighlight: polar1,
      editorComment: polar3,
      editorKeyword: frost2,
      editorString: aurora3,
      editorFunction: frost1,
      editorNumber: aurora4,
      editorType: aurora2,
      editorOperator: frost0,
      editorPunctuation: snow0,
    };
  }

  return {
    bgApp: snow2,
    bgSidebar: snow1,
    bgHeader: snow0,
    bgElevated: snow0,
    bgHover: '#d0d6e0',
    border: '#c7cdd8',
    borderStrong: polar3,
    fg: polar0,
    fgMuted: polar3,
    fgDim: '#7b8499',
    fgFaint: '#a0a8b8',
    fgBright: polar0,
    accent: frost3,
    accentHover: frost2,
    danger: aurora0,
    dangerHover: aurora1,
    warn: '#c9a227',
    running: aurora1,
    gitAdd: '#6f9a5a',
    gitMod: '#b8962e',
    gitDel: aurora0,
    folder: '#b8962e',
    diffAdd: '#6f9a5a',
    diffAddBg: withAlpha('#6f9a5a', 0.15),
    diffDel: aurora0,
    diffDelBg: withAlpha(aurora0, 0.15),
    diffHeader: frost3,
    termBg: snow2,
    termFg: polar0,
    termCursor: polar0,
    termCursorAccent: snow2,
    termSelection: withAlpha(frost2, 0.35),
    black: polar1,
    red: aurora0,
    green: aurora3,
    yellow: aurora2,
    blue: frost3,
    magenta: aurora4,
    cyan: frost1,
    white: snow0,
    brightBlack: polar3,
    brightRed: aurora0,
    brightGreen: aurora3,
    brightYellow: aurora2,
    brightBlue: frost2,
    brightMagenta: aurora4,
    brightCyan: frost0,
    brightWhite: snow2,
    editorBg: snow2,
    editorFg: polar0,
    editorSelection: withAlpha(frost2, 0.25),
    editorCursor: polar0,
    editorLineHighlight: snow0,
    editorComment: polar3,
    editorKeyword: frost3,
    editorString: '#6f9a5a',
    editorFunction: frost2,
    editorNumber: aurora4,
    editorType: '#b8962e',
    editorOperator: frost0,
    editorPunctuation: polar1,
  };
}

function gruvbox(light: boolean): ThemeColors {
  const dark0 = '#282828';
  const dark0h = '#1d2021';
  const dark1 = '#3c3836';
  const dark2 = '#504945';
  const dark3 = '#665c54';
  const dark4 = '#7c6f64';
  const gray = '#928374';
  const light0 = '#fbf1c7';
  const light1 = '#ebdbb2';
  const light2 = '#d5c4a1';
  const light3 = '#bdae93';
  const light4 = '#a89984';
  const brightRed = '#fb4934';
  const brightGreen = '#b8bb26';
  const brightYellow = '#fabd2f';
  const brightBlue = '#83a598';
  const brightPurple = '#d3869b';
  const brightAqua = '#8ec07c';
  const brightOrange = '#fe8019';
  const neutralRed = '#cc241d';
  const neutralGreen = '#98971a';
  const neutralYellow = '#d79921';
  const neutralBlue = '#458588';
  const neutralPurple = '#b16286';
  const neutralAqua = '#689d6a';
  const fadedRed = '#9d0006';
  const fadedGreen = '#79740e';
  const fadedYellow = '#b57614';
  const fadedBlue = '#076678';
  const fadedPurple = '#8f3f71';
  const fadedAqua = '#427b58';
  const fadedOrange = '#af3a03';

  if (!light) {
    return {
      bgApp: dark0,
      bgSidebar: dark0h,
      bgHeader: dark1,
      bgElevated: dark1,
      bgHover: dark2,
      border: dark2,
      borderStrong: dark3,
      fg: light1,
      fgMuted: gray,
      fgDim: dark4,
      fgFaint: dark3,
      fgBright: light0,
      accent: brightAqua,
      accentHover: neutralAqua,
      danger: brightRed,
      dangerHover: neutralRed,
      warn: brightYellow,
      running: brightOrange,
      gitAdd: brightGreen,
      gitMod: brightYellow,
      gitDel: brightRed,
      folder: brightYellow,
      diffAdd: brightGreen,
      diffAddBg: withAlpha(brightGreen, 0.15),
      diffDel: brightRed,
      diffDelBg: withAlpha(brightRed, 0.15),
      diffHeader: brightAqua,
      termBg: dark0,
      termFg: light1,
      termCursor: light1,
      termCursorAccent: dark0,
      termSelection: withAlpha(dark3, 0.7),
      black: dark0,
      red: neutralRed,
      green: neutralGreen,
      yellow: neutralYellow,
      blue: neutralBlue,
      magenta: neutralPurple,
      cyan: neutralAqua,
      white: light4,
      brightBlack: gray,
      brightRed,
      brightGreen,
      brightYellow,
      brightBlue,
      brightMagenta: brightPurple,
      brightCyan: brightAqua,
      brightWhite: light1,
      editorBg: dark0,
      editorFg: light1,
      editorSelection: withAlpha(dark3, 0.7),
      editorCursor: light1,
      editorLineHighlight: dark1,
      editorComment: gray,
      editorKeyword: brightRed,
      editorString: brightGreen,
      editorFunction: brightAqua,
      editorNumber: brightPurple,
      editorType: brightYellow,
      editorOperator: brightOrange,
      editorPunctuation: light2,
    };
  }

  return {
    bgApp: light0,
    bgSidebar: '#f2e5bc',
    bgHeader: light1,
    bgElevated: light1,
    bgHover: light2,
    border: light2,
    borderStrong: light3,
    fg: dark1,
    fgMuted: gray,
    fgDim: light4,
    fgFaint: light3,
    fgBright: dark0,
    accent: fadedAqua,
    accentHover: neutralAqua,
    danger: fadedRed,
    dangerHover: neutralRed,
    warn: fadedYellow,
    running: fadedOrange,
    gitAdd: fadedGreen,
    gitMod: fadedYellow,
    gitDel: fadedRed,
    folder: fadedYellow,
    diffAdd: fadedGreen,
    diffAddBg: withAlpha(fadedGreen, 0.15),
    diffDel: fadedRed,
    diffDelBg: withAlpha(fadedRed, 0.15),
    diffHeader: fadedAqua,
    termBg: light0,
    termFg: dark1,
    termCursor: dark1,
    termCursorAccent: light0,
    termSelection: withAlpha(light3, 0.6),
    black: dark0,
    red: neutralRed,
    green: neutralGreen,
    yellow: neutralYellow,
    blue: neutralBlue,
    magenta: neutralPurple,
    cyan: neutralAqua,
    white: light4,
    brightBlack: gray,
    brightRed: fadedRed,
    brightGreen: fadedGreen,
    brightYellow: fadedYellow,
    brightBlue: fadedBlue,
    brightMagenta: fadedPurple,
    brightCyan: fadedAqua,
    brightWhite: dark1,
    editorBg: light0,
    editorFg: dark1,
    editorSelection: withAlpha(light3, 0.6),
    editorCursor: dark1,
    editorLineHighlight: light1,
    editorComment: gray,
    editorKeyword: fadedRed,
    editorString: fadedGreen,
    editorFunction: fadedAqua,
    editorNumber: fadedPurple,
    editorType: fadedYellow,
    editorOperator: fadedOrange,
    editorPunctuation: dark2,
  };
}

export const THEME_PRESETS: ThemeDefinition[] = [
  { id: 'tux-dark', name: 'Tux Dark', mode: 'dark', colors: tuxDark() },
  { id: 'catppuccin-mocha', name: 'Catppuccin Mocha', mode: 'dark', colors: catppuccin(CAT_MOCHA) },
  { id: 'catppuccin-macchiato', name: 'Catppuccin Macchiato', mode: 'dark', colors: catppuccin(CAT_MACCHIATO) },
  { id: 'catppuccin-frappe', name: 'Catppuccin Frappé', mode: 'dark', colors: catppuccin(CAT_FRAPPE) },
  { id: 'catppuccin-latte', name: 'Catppuccin Latte', mode: 'light', colors: catppuccin(CAT_LATTE) },
  { id: 'everforest-dark', name: 'Everforest Dark', mode: 'dark', colors: everforest(EF_DARK) },
  { id: 'everforest-light', name: 'Everforest Light', mode: 'light', colors: everforest(EF_LIGHT) },
  { id: 'nord', name: 'Nord', mode: 'dark', colors: nord(false) },
  { id: 'nord-light', name: 'Nord Light', mode: 'light', colors: nord(true) },
  { id: 'gruvbox-dark', name: 'Gruvbox Dark', mode: 'dark', colors: gruvbox(false) },
  { id: 'gruvbox-light', name: 'Gruvbox Light', mode: 'light', colors: gruvbox(true) },
];

export const PRESET_BY_ID: Record<string, ThemeDefinition> = Object.fromEntries(
  THEME_PRESETS.map((t) => [t.id, t]),
);

export function getPresetColors(id: string): ThemeColors {
  return PRESET_BY_ID[id]?.colors ?? PRESET_BY_ID['tux-dark'].colors;
}
