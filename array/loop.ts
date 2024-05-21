
// 定数回ループしたい
// htmlの要素を3つ区切りで改行して、みたいな要件がありそう

// jsにはrangeがないので、工夫が必要

const count = 3;

const array1 = [];
for (let index = 0; index < count; index++) {
  array1.push(index);
}
console.log(array1);

const array2 = Array.from({ length: count }, (_, index) => index);
console.log(array2);
