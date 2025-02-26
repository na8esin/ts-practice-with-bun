interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

// extendsをそもそも、分岐処理で使おうとする、この構文にすごい違和感を感じる
type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;
