// https://qiita.com/eyuta/items/e6c992422c33a2f28a9f

type ErrorOrSuccess =
  | { error: unknown; status: number }
  | { data: unknown; status: number };

function getUser(flag: boolean): ErrorOrSuccess {
  if (flag) {
    return { data: "aaa", status: 200 };
  } else {
    return { error: "error", status: 500 };
  }
}

getUser(true).data;
getUser(true)
  .error(
    // もちろんこれならOK
    getUser(true) as { data: unknown; status: number }
  )
  .data(getUser(true) as { error: unknown; status: number }).error;
