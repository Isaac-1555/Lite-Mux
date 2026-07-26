import type { ITheme } from '@xterm/xterm';
import type { ThemeColors } from './types';

export function toXtermTheme(c: ThemeColors): ITheme {
  return {
    background: c.termBg,
    foreground: c.termFg,
    cursor: c.termCursor,
    cursorAccent: c.termCursorAccent,
    selectionBackground: c.termSelection,
    selectionInactiveBackground: c.termSelection,
    black: c.black,
    red: c.red,
    green: c.green,
    yellow: c.yellow,
    blue: c.blue,
    magenta: c.magenta,
    cyan: c.cyan,
    white: c.white,
    brightBlack: c.brightBlack,
    brightRed: c.brightRed,
    brightGreen: c.brightGreen,
    brightYellow: c.brightYellow,
    brightBlue: c.brightBlue,
    brightMagenta: c.brightMagenta,
    brightCyan: c.brightCyan,
    brightWhite: c.brightWhite,
  };
}
