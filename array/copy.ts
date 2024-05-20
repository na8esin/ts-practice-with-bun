const a = [1, 2, 3];
const b = a.slice();
b[0] = 0;
console.log(a); // [1, 2, 3]
console.log(b); // [0, 2, 3]