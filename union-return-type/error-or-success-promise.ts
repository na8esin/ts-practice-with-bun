type ErrorOrSuccess = {error: unknown, status: number} | {data: unknown, status: number}

async function fetchUser(flag: boolean): Promise<ErrorOrSuccess> {
    if (flag) {
        return Promise.resolve({data: 'aaa', status: 200})
    } else {
        return Promise.reject({error: 'error', status: 500})
    }
}

function getUser(flag: boolean): ErrorOrSuccess {
    if (flag) {
        return {data: 'aaa', status: 200}
    } else {
        return {error: 'error', status: 500}
    }
}

fetchUser(true).then((res) => {
  // Property 'data' does not exist on type 'ErrorOrSuccess'.
  //  Property 'data' does not exist on type '{ error: unknown; status: number; }'
  res.data

  // Property 'error' does not exist on type 'ErrorOrSuccess'.
  //  Property 'error' does not exist on type '{ data: unknown; status: number; }'
  res.error
});

getUser(true).data
getUser(true).error

const eOs: ErrorOrSuccess = {data: 'aaa', status: 200};
eOs.data
const eOs2: ErrorOrSuccess = {error: 'aaa', status: 200};
eOs2.error
