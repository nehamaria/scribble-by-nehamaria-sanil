import axios from "axios";
import { Toastr } from "neetoui";

import { getFromLocalStorage, setToLocalStorage } from "helpers/storage";

const DEFAULT_ERROR_NOTIFICATION = "Something went wrong!";

axios.defaults.baseURL = "/";

const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = getFromLocalStorage("authToken");
  if (token) {
    axios.defaults.headers["X-Auth-Token"] = token;
  }
  setLoading(false);
};

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.notice) {
      Toastr.success(response.data.notice);
    }
  }

  return response;
};

const handleErrorResponse = axiosErrorObject => {
  Toastr.error(
    Error(axiosErrorObject.response?.data.error) || DEFAULT_ERROR_NOTIFICATION
  );
  if (axiosErrorObject.response?.status === 401) {
    setToLocalStorage({
      authToken: null,
    });
    setTimeout(() => (window.location.href = "/public/authenticate"), 3000);
  }

  if (axiosErrorObject.response?.status === 423) {
    setTimeout(() => (window.location.href = "/public/authenticate"), 3000);
  }

  return Promise.reject(axiosErrorObject);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

const resetAuthTokens = () => {
  delete axios.defaults.headers["X-Auth-Token"];
};

export { setAuthHeaders, registerIntercepts, resetAuthTokens };
