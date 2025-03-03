const a = ['b', 'z', 'a'] // 増えたり、減ったりする側

const b = ['b', 'y', 'a'] // こっちは初期値から変わらない

const c = a.filter((x) => b.includes(x))

console.log(c) // [ "b", "a" ]

const c2 = b.filter((x) => a.includes(x))

console.log(c2) // [ "b", "a" ]

const c3 = b.filter((x) => ['b','d', 'z', 'a'].includes(x))