import axios from "axios";

const articleList = () => axios.get("/articles");
const destroy = id => axios.delete(`/articles/${id}`);
const show = id => axios.get(`/articles/${id}`);
const create = payload => axios.post("/articles/", payload);
const update = (id, payload) => axios.put(`/articles/${id}`, payload);

const articleApi = { articleList, destroy, create, show, update };
export default articleApi;
