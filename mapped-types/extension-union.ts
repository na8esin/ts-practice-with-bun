type Name = {
  name: string;
}

type ID = {
  id: string;
}

type User<T extends Name> = {
  id: string;
} & T;

// Userの部分は展開される
type Hoge = User<Name>;

const hoge: Hoge = {
  id: '1',
  name: 'huga',
}

// 何も展開されない
type Fuga = Name & ID;

const fuga: Fuga = {
  id: '1',
  name: 'huga',
}

type Fuga2 = Name & {id: number};
type Hoge2 = User<{name: string}>;
