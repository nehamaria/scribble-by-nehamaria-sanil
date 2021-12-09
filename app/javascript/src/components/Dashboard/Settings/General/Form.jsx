import React from "react";

import { Formik, Form } from "formik";
import { Typography, Button } from "neetoui";
import { Input } from "neetoui/formik";

import generalApi from "apis/general";
import { setToLocalStorage } from "helpers/storage";

import Password from "./Password";

import { VALIDATE_GENERAL_SCHEMA } from "../ValidationSchema";

const GeneralForm = ({ initialValues }) => {
  const handleSubmit = async values => {
    const payload = {
      general: {
        name: values.name,
        password: values.isProtected ? values.password : null,
      },
    };
    if (payload.general.password === null) {
      setToLocalStorage({
        authToken: null,
      });
    }
    try {
      await generalApi.update(payload);
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VALIDATE_GENERAL_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className="pt-4 ">
        <div className="mb-2">
          <Input label="Site Name" name="name" placeholder="Enter site name" />
          <Typography style="body3" className="neeto-ui-text-gray-500 mt-1">
            Customize the site name which is used to show the site name in Open
            Graph Tags.
          </Typography>
        </div>
        <hr />
        <Password />
        <Button
          type="submit"
          size="default"
          className="mt-4"
          label="Save Changes"
        />
        <Button style="text" type="reset" label="Cancel" size="large" />
      </Form>
    </Formik>
  );
};

export default GeneralForm;
