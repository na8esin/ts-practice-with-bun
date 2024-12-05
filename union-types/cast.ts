type Status = "400" | "404";

const errorStatus = 404;

function getStatus(status: Status) {
  return status;
}

getStatus(errorStatus);
getStatus(errorStatus.toString());
getStatus(`${errorStatus}`);
