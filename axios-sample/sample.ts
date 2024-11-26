import axios from "axios";

type User = {
  id: number;
  name: string;
};

type FetchUserResponse = {
  status: number | null;
  data: User | null;
  error: unknown | null;
};

async function fetchUser(
  handleAxiosError: (error: axios.AxiosError<any, any>) => {},
  handleUnexpectedError: (error: unknown) => {}
): Promise<FetchUserResponse | null> {
  try {
    const { data, status } = await axios.get<User>("/user?ID=12345");
    return { data, status, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: null, status: error?.status, error: null };
    } else {
      handleUnexpectedError(error);
    }
  }
  return null;
}
