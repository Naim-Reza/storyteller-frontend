import { create } from "apisauce";
import { getToken } from "../auth/authstorage";

const baseUrl = "http://127.0.0.1:8000/api";

const Api = create({
  baseURL: baseUrl,
});

Api.addRequestTransform(
  (request) => (request.headers["Authorization"] = "Bearer " + getToken())
);

export default Api;
