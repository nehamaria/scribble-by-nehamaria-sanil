import axios from "axios";

const update = payload => axios.patch("/general/", payload);
const show = () => axios.get("/general");
const generalApi = { update, show };
export default generalApi;
