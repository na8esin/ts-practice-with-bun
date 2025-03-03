const a = [1, 3, 4]

const b = [1, 2]

const c = a.filter((x) => b.includes(x))

console.log(c) // [1]