// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// ↑には載ってないけど、マルチバイト文字列もリテラル型として使える

type greeting = '【こんにちは】';

const message: greeting = 'こんにちは'; // Type '"こんにちは"' is not assignable to type '"【こんにちは】"'.

console.log(message);