import axios from "axios";

const redirectionList = () => axios.get("/redirections");
const destroy = id => axios.delete(`/redirections/${id}`);
const show = id => axios.get(`/redirections/${id}`);
const create = payload => axios.post("/redirections/", payload);
const update = (id, payload) => axios.put(`/redirections/${id}`, payload);

const redirectionApi = { redirectionList, destroy, create, show, update };
export default redirectionApi;
