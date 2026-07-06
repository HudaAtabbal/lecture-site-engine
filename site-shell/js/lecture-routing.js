/** @param {string} hash */
export function anchorIdFromHash(hash) {
  if (!hash) return '';
  return decodeURIComponent(String(hash).replace(/^#/, ''));
}

/** @param {number} idx */
export function lectureIndexHash(idx) {
  return `l${idx}`;
}

/**
 * @param {string} hash
 * @param {Array<{ lec: { id: string } }>} items
 */
export function getLectureIndexFromHash(hash, items) {
  if (!hash || hash === 'home') return -1;
  const id = anchorIdFromHash(hash);
  const indexMatch = id.match(/^l(\d+)$/);
  if (indexMatch) {
    const idx = Number(indexMatch[1]);
    return idx >= 0 && idx < items.length ? idx : -1;
  }
  const exact = items.findIndex(it => it.lec.id === id);
  if (exact >= 0) return exact;
  let best = -1;
  let bestLen = 0;
  for (let i = 0; i < items.length; i++) {
    const lid = items[i].lec.id;
    if (id.startsWith(`${lid}-`) && lid.length > bestLen) {
      best = i;
      bestLen = lid.length;
    }
  }
  return best;
}

/**
 * @param {string|undefined} hashPart
 * @param {{ lec: { id: string } }} item
 */
export function hashPointsToSection(hashPart, item) {
  if (!hashPart || hashPart === item.lec.id) return false;
  if (/^l\d+$/.test(hashPart)) return false;
  return hashPart.startsWith(`${item.lec.id}-`);
}

/**
 * @param {number} idx
 * @param {string|undefined} hashPart
 * @param {{ lec: { id: string } }} item
 */
export function resolveLectureHash(idx, hashPart, item) {
  return hashPointsToSection(hashPart, item) ? hashPart : item.lec.id;
}
