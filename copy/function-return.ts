const a = { name: "hoge" };

const copy = (value: typeof a): typeof a => value;

const b = copy(a);
b.name = "fuga";
console.log(a); // {name: 'fuga'}

// 普通の関数でも同じくシャローコピー
function copy2<T>(value: T): T {
  return value;
}

const c = copy2(a);
c.name = "piyo";
console.log(a); // {name: 'piyo'}

