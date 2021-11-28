import axios from "axios";

const categoryList = () => axios.get("/categories");
const create = payload => axios.post("/categories/", payload);
const categoryApi = { categoryList, create };
export default categoryApi;
