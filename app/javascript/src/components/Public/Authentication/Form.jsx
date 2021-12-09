import React from "react";

import { Formik, Form } from "formik";
import { Typography, Button } from "neetoui";
import { Input } from "neetoui/formik";
import previewimage from "src/assets/Preview.png";
import * as yup from "yup";

const AuthenticationForm = ({ handleSubmit, siteName }) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen
    px-4 py-12 lg:px-8 bg-gray-50 sm:px-6"
    >
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center">
          <img src={previewimage} />
        </div>
        <Typography style="h2" className="ml-6">
          {siteName} is password protected!
        </Typography>
        <Typography style="body1" className="ml-6">
          Enter the password to gain access to {siteName}.
        </Typography>
        <Formik
          initialValues={{ password: "" }}
          onSubmit={handleSubmit}
          validationSchema={yup.object({
            password: yup.string().required("Please provide a valid password"),
          })}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col mt-8 m-6 gap-y-6">
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="********"
              />
              <div>
                <Button
                  type="submit"
                  label={<Typography className="px-4">Continue</Typography>}
                  size="default"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthenticationForm;
