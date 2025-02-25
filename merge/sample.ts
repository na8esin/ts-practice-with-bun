type Merge<T> = {
  [K in keyof T]: T[K]
}

type Hoge = Merge<{ a: 1 } & { b: 1 }>