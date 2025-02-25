type User1 = {
  profile: {
    id: string
  }
}

type Profile1 = {
  id: string
}

type User2 = {
  profile: {
    userID: string
  }
}

type Profile2 = {
  userID: string
}

interface Profile3 extends Profile1, Profile2 {
}

// Interface 'User3' cannot simultaneously extend types 'User1' and 'User2'.
// Named property 'profile' of types 'User1' and 'User2' are not identical.
interface User3 extends User1, User2 {
  a: any
}

type User4 = {
  profile: Profile3
}

const userA: User4 = {
  profile: {
    id: '1',
    userID: '2'
  }
}

function fn1(u: User1){}
function fn2(u: User2){}

fn1(userA)
fn2(userA)
