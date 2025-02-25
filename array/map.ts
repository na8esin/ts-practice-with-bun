// リターンを省略する場合は()がないとだめ
const s = ["a", "b"].map((e) =>
  ({
    id: e,
  })
);

console.log(s);
