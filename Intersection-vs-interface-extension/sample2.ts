type User1 = {
  id: string
}

type User2 = {
  userId: string
}

type User3 = User1 & User2;


const userA: User3 = {
  id: '1',
  userId: '2'
};

const userB: User3 = {
  id: '1',
};

const userC: User3 = {
  userId: '2'
};

const userD: User3 = {
  id: '1',
  userId: '2',
  userName: 'aa' // 追加したら怒られる
};

// Partialでもだめ。当たり前か。
type User4 = Partial<User1> & Partial<User2>;

const userE: User4 = {
  id: '1',
  userId: '2',
  userName: 'aa' // 追加したら怒られる
};

interface User5 extends User1, User2 {
  userName: string
};

const userF: User5 = {
  id: '1',
  userId: '2',
  userName: 'aa'
};

function fn1(u: User1) {}

fn1({id: '1', userId: '2'}); // 余分な要素があれば怒られる

fn1({id: '1', userId: '2'} as User1); // 余分な要素があってもasでいける

fn1({userId: '2'} as User1); // 必須項目がなければ、さすがに怒られる

fn1(userF) // interfaceであれば問題なし

