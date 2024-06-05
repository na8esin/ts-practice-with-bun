// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing

function f1(value: boolean) {
  console.log(value)
}

function f2(value: [] | null) {
  // Type 'undefined' is not assignable to type 'boolean'.
  f1(value?.some((e)=> e===3))
}

function f3(value: [] | null) {
  // 二重否定することにより、nullの入る余地がなくなる
  f1(!!value?.some((e)=> e===3))
}

