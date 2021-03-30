import urls from "../config/urls";
import Api from "./client";

const loginRequest = (request) =>
  Api.post(urls.login, request).then((response) => response);

const logoutRequest = () => Api.post(urls.logout).then((response) => response);

const registerUser = (values) =>
  Api.post(urls.register, values)
    .then((response) => response)
    .catch((error) => error);

export { loginRequest, logoutRequest, registerUser };
