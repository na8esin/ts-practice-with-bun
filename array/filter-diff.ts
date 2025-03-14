function intersection(a: string[], b: string[]) {
  const c = a.filter((x) => b.includes(x))
  console.log(c);
}

function deleted(a: string[], b: string[]) {
  const c = a.filter((x) => !b.includes(x))
  console.log(c);
  return c;
}

function added(a: string[], b: string[]) {
  const c = b.filter((x) => !a.includes(x))
  console.log(c);
  return c;
}


// 引数をひっくり返しても一緒
intersection(['b', 'z', 'a'], ['b', 'y', 'a']) // [ "b", "a" ]
intersection(['b', 'y', 'a'], ['b', 'z', 'a']) // [ "b", "a" ]

// 追加されたか、削除されたかを判別する
const addedIds = added(['b', 'z', 'a'], ['b', 'y', 'a']) // [ "y" ]
const deletedIds = deleted(['b', 'z', 'a'], ['b', 'y', 'a']) // [ "z" ]
