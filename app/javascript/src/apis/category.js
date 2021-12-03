import axios from "axios";

const categoryList = () => axios.get("/categories");
const create = payload => axios.post("/categories/", payload);
const destroy = id => axios.delete(`/categories/${id}`);
const update = (id, payload) => axios.put(`/categories/${id}`, payload);
const sort = payload => axios.post("/categories/sort", payload);
const categoryApi = { categoryList, create, destroy, update, sort };
export default categoryApi;
