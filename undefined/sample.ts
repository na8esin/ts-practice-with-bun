type UserResponse = {
  data: 'user data';
  status?: number;
};

const response: UserResponse = {
  data: 'user data',
};

// 存在しないプロパティにアクセスしてもエラーになったりしないか
if(!!response.status) {
  console.log(`status exists=${!!response.status}`);
} else {
  console.log(`status does not exist=${!!response.status}`);
}