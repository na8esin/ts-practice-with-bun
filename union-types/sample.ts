type User1 = {
  id?: string
}

type User2 = {
  userId?: string
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

