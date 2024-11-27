import axios from "axios";

type User = {
  id: number;
  name: string;
};

type FetchUserResponse =
  | {
      status?: number;
      error: unknown | null;
      type: "Failure";
    }
  | { status?: number; data: User; type: "Success" };

async function fetchUser(): Promise<FetchUserResponse | null> {
  try {
    const { data, status } = await axios.get<User>("/user?ID=12345");
    return { data, status, type: "Success" };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error?.status, error: error, type: "Failure" };
    } else {
      throw error;
    }
  }
}

fetchUser().then((res) => {
  switch (res?.type) {
    case "Success":
      res.data;
      res.status;
      break;
    case "Failure":
      res.error;
      res.status;
      break;
    default:
      console.log("不正なタイプ");
  }
});
