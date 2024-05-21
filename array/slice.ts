const currentMove = 1

const history = [[null, null, null],['x', null, null],['x', 'o', null]]

const next = [...history.slice(0, currentMove + 1), ['x', 'o', 'x']]

console.log(next) // [[null, null, null],['x', null, null],['x', 'o', 'x']]