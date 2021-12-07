import axios from "axios";

const login = payload => axios.post("/session", payload);
const previewApi = {
  login,
};
export default previewApi;
