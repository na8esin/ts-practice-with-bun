const _addresses = [
  { id: 1, name: 'John', city: 'New York' },
  { id: 1, name: 'John', city: 'New York' },
  { id: 2, name: 'Jane', city: 'Chicago' },
  { id: 3, name: 'Doe', city: 'Los Angeles' },
]

// ユニークにするだけの処理
const a = Array.from(new Map(_addresses.map((a) => [a.id, a])).values());

console.log(a);

console.log(_addresses);