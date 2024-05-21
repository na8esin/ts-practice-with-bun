const a: Array<string | null> = ['a', null, 'b', null];

const b: string[] = ['a', null, 'b', null]; // Error: Type 'null' is not assignable to type 'string'.

const c: Array<string?> = ['a', null, 'b', null]; // '?' at the end of a type is not valid TypeScript syntax. Did you mean to write 'string | undefined'?

// これもだめ
// const d: string?[] = ['a', null, 'b', null];
