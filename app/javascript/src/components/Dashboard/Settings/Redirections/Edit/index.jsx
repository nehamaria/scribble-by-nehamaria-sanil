import React from "react";

import redirectionApi from "apis/redirection";

import RedirectionForm from "../Form";

const EditRedirections = ({
  setUpdateRedirections,
  updateRedirections,
  fetchRedirectionList,
  rowId,
}) => {
  const handleSubmit = async values => {
    const payload = values;
    try {
      await redirectionApi.update(rowId, payload);
      fetchRedirectionList();
    } catch (error) {
      logger.error;
    } finally {
      setUpdateRedirections({ id: "", from_path: "", to_path: "" });
    }
  };

  return (
    <RedirectionForm
      handleSubmit={handleSubmit}
      initialValues={updateRedirections}
    />
  );
};

export default EditRedirections;
