type A = {
  data: string;
}

type B<T extends A> = {
}

type D = B<C>;