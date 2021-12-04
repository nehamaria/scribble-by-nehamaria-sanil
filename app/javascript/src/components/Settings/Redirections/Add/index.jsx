import React from "react";

import redirectionApi from "apis/redirection";
import { INITIAL_FORM_VALUES } from "components/Settings/constants";

import RedirectionForm from "../Form";

const AddRedirections = ({ fetchRedirectionList, setAddRedirections }) => {
  const handleAddRedirection = async (values, { setSubmitting }) => {
    const payload = { redirection: values };
    try {
      await redirectionApi.create(payload);
      fetchRedirectionList();
    } catch (error) {
      logger.error(error);
    } finally {
      setAddRedirections(false);
      setSubmitting(false);
    }
  };

  return (
    <RedirectionForm
      handleSubmit={handleAddRedirection}
      initialValues={INITIAL_FORM_VALUES}
    />
  );
};

export default AddRedirections;
