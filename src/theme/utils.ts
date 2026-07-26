/** Expand #rgb / #rrggbb to 6-digit hex (no #). */
export function normalizeHex(hex: string): string | null {
  const raw = hex.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(raw)) {
    return raw
      .split('')
      .map((c) => c + c)
      .join('')
      .toLowerCase();
  }
  if (/^[0-9a-fA-F]{6}$/.test(raw)) return raw.toLowerCase();
  if (/^[0-9a-fA-F]{8}$/.test(raw)) return raw.slice(0, 6).toLowerCase();
  return null;
}

export function withAlpha(hex: string, alpha: number): string {
  const n = normalizeHex(hex);
  if (!n) return hex;
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function toCssHex(hex: string): string {
  const n = normalizeHex(hex);
  return n ? `#${n}` : hex;
}
