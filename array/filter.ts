const a = [1, 3, 4]

const b = [1, 2]

const c = b.filter((x) => a.includes(x) == false)

console.log(c) // [1, 2, 3]