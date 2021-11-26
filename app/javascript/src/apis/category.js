import axios from "axios";

const categoryList = () => axios.get("/categories");
const categoryApi = { categoryList };
export default categoryApi;
