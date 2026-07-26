import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import type { Extension } from '@codemirror/state';
import type { ThemeColors } from './types';

const cache = new Map<string, Extension>();

function cacheKey(c: ThemeColors): string {
  return [
    c.editorBg, c.editorFg, c.editorCursor, c.editorSelection, c.editorLineHighlight,
    c.editorComment, c.editorKeyword, c.editorString, c.editorFunction,
    c.editorNumber, c.editorType, c.editorOperator, c.editorPunctuation,
    c.fgMuted, c.fg, c.accent, c.danger,
  ].join('|');
}

export function toCodeMirrorTheme(c: ThemeColors): Extension {
  const key = cacheKey(c);
  const hit = cache.get(key);
  if (hit) return hit;

  const ext = createTheme({
    theme: isLight(c) ? 'light' : 'dark',
    settings: {
      background: c.editorBg,
      foreground: c.editorFg,
      caret: c.editorCursor,
      selection: c.editorSelection,
      selectionMatch: c.editorSelection,
      lineHighlight: c.editorLineHighlight,
      gutterBackground: c.editorBg,
      gutterForeground: c.fgMuted,
      gutterBorder: 'transparent',
      gutterActiveForeground: c.fg,
    },
    styles: [
      { tag: t.comment, color: c.editorComment },
      { tag: t.lineComment, color: c.editorComment },
      { tag: t.blockComment, color: c.editorComment },
      { tag: t.docComment, color: c.editorComment },
      { tag: t.keyword, color: c.editorKeyword },
      { tag: t.controlKeyword, color: c.editorKeyword },
      { tag: t.operatorKeyword, color: c.editorKeyword },
      { tag: t.moduleKeyword, color: c.editorKeyword },
      { tag: t.definitionKeyword, color: c.editorKeyword },
      { tag: t.string, color: c.editorString },
      { tag: t.special(t.string), color: c.editorString },
      { tag: t.character, color: c.editorString },
      { tag: t.number, color: c.editorNumber },
      { tag: t.integer, color: c.editorNumber },
      { tag: t.float, color: c.editorNumber },
      { tag: t.bool, color: c.editorNumber },
      { tag: t.null, color: c.editorNumber },
      { tag: t.function(t.variableName), color: c.editorFunction },
      { tag: t.function(t.propertyName), color: c.editorFunction },
      { tag: t.definition(t.function(t.variableName)), color: c.editorFunction },
      { tag: t.typeName, color: c.editorType },
      { tag: t.className, color: c.editorType },
      { tag: t.namespace, color: c.editorType },
      { tag: t.macroName, color: c.editorType },
      { tag: t.operator, color: c.editorOperator },
      { tag: t.punctuation, color: c.editorPunctuation },
      { tag: t.bracket, color: c.editorPunctuation },
      { tag: t.angleBracket, color: c.editorPunctuation },
      { tag: t.squareBracket, color: c.editorPunctuation },
      { tag: t.paren, color: c.editorPunctuation },
      { tag: t.brace, color: c.editorPunctuation },
      { tag: t.variableName, color: c.editorFg },
      { tag: t.propertyName, color: c.editorFg },
      { tag: t.attributeName, color: c.editorType },
      { tag: t.attributeValue, color: c.editorString },
      { tag: t.tagName, color: c.editorKeyword },
      { tag: t.meta, color: c.fgMuted },
      { tag: t.heading, color: c.editorKeyword, fontWeight: 'bold' },
      { tag: t.link, color: c.accent },
      { tag: t.url, color: c.accent },
      { tag: t.invalid, color: c.danger },
    ],
  });

  cache.set(key, ext);
  return ext;
}

function isLight(c: ThemeColors): boolean {
  const hex = c.bgApp.replace('#', '');
  if (hex.length < 6) return false;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  // relative luminance threshold
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55;
}
