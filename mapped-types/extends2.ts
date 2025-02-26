type A = {
  data: string;
}

type B<T extends A> = {
  path: string;
}

type C = {
  name: string;
  data: string;
}

type D = B<C>;