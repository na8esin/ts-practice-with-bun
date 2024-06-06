function f1(value: boolean) {
  console.log(value)
}

function f2(value: [] | null) {
  f1(value?.some((e)=> e===3) ?? false)
}

function f3(value: [] | null) {
  f1(!!value?.some((e)=> e===3))
}

f2(null)
f3(null)