import React from "react";

import { Formik } from "formik";
import { Check } from "neetoicons";
import { Typography, Button } from "neetoui";
import { Input } from "neetoui/formik";

import { REDIRECTION_VALIDATION } from "components/Dashboard/Settings/ValidationSchema";

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
                <Typography style="body2">{window.location.origin}</Typography>
              }
            />
          </td>
          <td className="text-left p-5 mx-4">
            <Input
              name="to_path"
              prefix={
                <Typography style="body2">{window.location.origin}</Typography>
              }
            />
          </td>
          <td className="p-4">
            <Button
              style="text"
              icon={() => <Check />}
              loading={isSubmitting}
              disabled={isSubmitting}
              onMouseDown={e => {
                e.preventDefault();
                handleSubmit();
              }}
            />
          </td>
        </>
      )}
    </Formik>
  );
};

export default RedirectionForm;
