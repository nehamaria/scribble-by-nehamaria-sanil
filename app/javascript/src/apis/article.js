import axios from "axios";

const articleList = () => axios.get("/articles");
const destroy = slug => axios.delete(`/articles/${slug}`);
const show = slug => axios.get(`/articles/${slug}`);
const create = payload => axios.post("/articles/", payload);
const update = (slug, payload) => axios.put(`/articles/${slug}`, payload);

const articleApi = { articleList, destroy, create, show, update };
export default articleApi;
