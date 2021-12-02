import React from "react";

import { Formik, Form } from "formik";
import { Typography, Button } from "neetoui";
import { Input } from "neetoui/formik";
import * as yup from "yup";

import Password from "./Password";

const GeneralForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", password: "new1", isChecked: false }}
        validateSchema={yup.object({
          name: yup.string().required("This field is required"),
        })}
      >
        <Form className="mt-4">
          <div className="w-4/5 border-b py-4">
            <Input
              label="Site Name"
              name="name"
              type="text"
              placeholder="Enter site name"
            />
            <Typography style="body3" className="neeto-ui-text-gray-500 mt-1">
              Customize the site name which is used to show the site name in
              Open Graph Tags.
            </Typography>
          </div>
          <Password />
          <Button
            type="submit"
            size="default"
            className="mt-4"
            label={<Typography>Save Changes</Typography>}
          />
          <Button style="text" type="reset" label="Cancel" size="large" />
        </Form>
      </Formik>
    </div>
  );
};

export default GeneralForm;
