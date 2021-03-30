import Api from "./client";

const userEndPoint = "/user";

const getUserData = () =>
  Api.get(userEndPoint)
    .then((response) => response)
    .catch((error) => error);

export { getUserData };
