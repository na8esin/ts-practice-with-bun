import axios from "axios";

type User = {
  id: number;
  name: string;
};

type FetchUserResponse =
  | {
      status?: number;
      error: unknown | null;
    }
  | { status?: number; data: User };

async function fetchUser(): Promise<FetchUserResponse | null> {
  try {
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
  // Property 'data' does not exist on type '{ status?: number | undefined; error: unknown; }'
  res?.data;

  // Property 'error' does not exist on type '{ status?: number | undefined; data: User; }'
  res?.error;
});
