import {
  getLectureIndexFromHash,
  resolveLectureHash,
  hashPointsToSection,
} from '../../site-shell/js/lecture-routing.js';

const items = [
  { lec: { id: 'par1-sec1' } },
  { lec: { id: 'par1-sec2' } },
  { lec: { id: 'par1-sec3' } },
  { lec: { id: 'par1-sec4' } },
  { lec: { id: 'par2' } },
  { lec: { id: 'par3-sec1' } },
  { lec: { id: 'par3-sec2' } },
  { lec: { id: 'par4' } },
];

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

assert(getLectureIndexFromHash('par2', items) === 4, 'par2 → index 4');
assert(getLectureIndexFromHash('par1-sec2', items) === 1, 'par1-sec2 → index 1');
assert(getLectureIndexFromHash('par1-sec2-p1', items) === 1, 'section → parent lecture');
assert(getLectureIndexFromHash('par4', items) === 7, 'par4 → index 7');
assert(getLectureIndexFromHash('l7', items) === 7, 'legacy l7 → index 7');
assert(getLectureIndexFromHash('lec1', items) === -1, 'stale lec1 does not match');

assert(resolveLectureHash(4, undefined, items[4]) === 'par2', 'card click hash is lecture id');
assert(resolveLectureHash(4, 'par2', items[4]) === 'par2', 'lecture root hash');
assert(resolveLectureHash(4, 'par2-p2', items[4]) === 'par2-p2', 'section hash preserved');
assert(!hashPointsToSection('par1-sec2', items[1]), 'lecture id is not a section hash');
assert(hashPointsToSection('par1-sec2-p1', items[1]), 'part anchor is section hash');

console.log('lecture-routing tests: OK');
