type Point = { x: number; y: number };
type P = keyof Point;

const p: P = "x";
const p1: P = "y";
const p2: P = "z";


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

const a: A = 0;
const a1: A = '0';

type Mapish = { [k: string]: boolean };
const ma: Mapish = { foo: true, bar: false };

type M = keyof Mapish;

const m: M = "foo";
const m1: M = 0;

type Mapish2 = { [k: number]: boolean };
const ma2: Mapish2 = { 0: true, 1: false };
console.log(ma2);
// {
//   "0": true,
//   "1": false,
// }
// 結局keyはstringになる