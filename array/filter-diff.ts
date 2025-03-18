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


// そのまんまの要素をfilterする。引数をひっくり返しても一緒
intersection(['b', 'z', 'a'], ['b', 'y', 'a']) // [ "b", "a" ]
intersection(['b', 'y', 'a'], ['b', 'z', 'a']) // [ "b", "a" ]

console.log('-------');

// 追加されたか、削除されたかを判別する
added(['b', 'z', 'a'], ['b', 'y', 'a']) // [ "y" ]
deleted(['b', 'z', 'a'], ['b', 'y', 'a']) // [ "z" ]


console.log('---- addedのバリエーション ---');
added(['a'], ['b'])
added(['a'], []) // []