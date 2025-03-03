type A = {
  a: string;
  b: number;
}

const a: A = {
  a: 'a',
  b: 1
}

type B = typeof a;

const b: B = {
  a: 'a',
  b: 1
}