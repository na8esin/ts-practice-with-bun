import axios from "axios";

type User = {
  id: number;
  name: string;
};

type FetchUserResponse = {
  status?: number;
  error?: unknown | null;
  data?: User;
};

async function fetchUser(): Promise<FetchUserResponse | null> {
  try {
    // urlが存在しないので、実際には実行できません
    const { data, status } = await axios.get<User>("/user?ID=12345");
    return { data, status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error?.status, error: error };
    } else {
      throw error;
    }
  }
}

fetchUser().then((res) => {
  // 全部エラーにならない
  res?.data;
  res?.error;
  res?.status;
});
