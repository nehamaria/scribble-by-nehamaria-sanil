import React from "react";

import { Toastr } from "neetoui";

import previewApi from "apis/preview";

import AuthenticationForm from "./Form";

import { setToLocalStorage } from "../../../helpers/storage";

const Authentication = ({ siteDetails }) => {
  const handleSubmit = async values => {
    try {
      const response = await previewApi.login({
        login: { password: values.password },
      });
      setToLocalStorage({
        authToken: response.data.authentication_token,
      });
      window.location.href = "/public";
      Toastr.success("Logged in Successfully");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <AuthenticationForm
      handleSubmit={handleSubmit}
      siteName={siteDetails.name}
    />
  );
};

export default Authentication;
