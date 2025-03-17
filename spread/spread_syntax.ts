function sum(x: string, y: string, ...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];

sum('hello', 'world', ...numbers); // 6
