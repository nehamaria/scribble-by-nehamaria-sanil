import React, { useState, useEffect } from "react";

import { Typography, PageLoader } from "neetoui";

import generalApi from "apis/general";

import GeneralForm from "./Form";

const General = () => {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    password: "",
    isProtected: false,
  });

  const fetchSiteName = async () => {
    setLoading(true);
    try {
      const response = await generalApi.show();
      setInitialValues({
        name: response.data.name,
        password: "",
        isProtected: response.data.isProtected,
      });
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => fetchSiteName(), []);
  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-6">
      <Typography style="h2">General Settings</Typography>
      <Typography style="body1" className="neeto-ui-text-gray-600">
        Configure general attributes of scribble.
      </Typography>
      <GeneralForm initialValues={initialValues} />
    </div>
  );
};

export default General;
