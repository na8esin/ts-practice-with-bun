const callBackFn = (e: string): boolean => {
  return e === "c";
};

const a = ["b"].filter<string>(callBackFn);

console.log(a);



interface A {
  c: string;
}

interface B extends A {
  d: string;
}

const callBackFn2 = (e: A): B => {
  return {c: "c", d: "1"};
};

const a2 = [{c: "c"}].filter<B extends A>(callBackFn2);

console.log(a2);
