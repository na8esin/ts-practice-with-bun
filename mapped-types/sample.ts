type APerson = {
  id: string
  name: string
}

// Omitは展開される
type BPerson = Omit<APerson, 'id'>

type CPerson = {
  [K in keyof APerson]: APerson[K];
  // age: number // A mapped type may not declare properties or methods.
}

// こんなんやってられなくね？
type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T

type Temp = Expand<APerson & {age: number}>
