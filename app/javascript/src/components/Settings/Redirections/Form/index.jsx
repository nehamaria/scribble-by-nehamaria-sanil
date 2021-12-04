import React from "react";

import { Formik } from "formik";
import { Check } from "neetoicons";
import { Typography, Button } from "neetoui";
import { Input } from "neetoui/formik";

import { REDIRECTION_VALIDATION } from "components/Settings/ValidationSchema";

const RedirectionForm = ({ initialValues, handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={REDIRECTION_VALIDATION}
    >
      {({ isSubmitting, handleSubmit }) => (
        <>
          <td className="text-left p-5 mx-4">
            <Input
              name="from_path"
              prefix={
                <Typography style="body2">https://scribble.com</Typography>
              }
            />
          </td>
          <td className="text-left p-5 mx-4">
            <Input name="to_path" />
          </td>
          <td>
            <Button
              type="submit"
              style="text"
              icon={() => <Check onClick={handleSubmit} />}
              loading={isSubmitting}
              disabled={isSubmitting}
            />
          </td>
        </>
      )}
    </Formik>
  );
};

export default RedirectionForm;
