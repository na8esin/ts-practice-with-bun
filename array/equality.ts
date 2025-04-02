console.log(["a"] === ["a"]); // false

console.log(["a"].toString() === ["a"].toString()); // true
console.log(["a", "b"].toString() === ["b", "a"].toString()); // false

console.log([].toString() === [].toString()); // true

// 重複、並び順が考慮できればねぇ。