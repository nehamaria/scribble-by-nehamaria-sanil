import React from "react";

import { Formik, Form } from "formik";
import { Button } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { Link } from "react-router-dom";

import { INITIAL_FORM_VALUES, VALIDATION_SCHEMA } from "./constants";
import Submit from "./Submit";

const ArticleForm = ({
  handleSubmit,
  categoryList,
  status,
  setStatus,
  initialForm = INITIAL_FORM_VALUES,
}) => {
  return (
    <Formik
      initialValues={initialForm}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="flex mt-8 gap-y-6 m-4 w-full">
          <div className="mx-auto w-1/2">
            <div className="flex space-x-5 pb-5">
              <Input
                label="Article Title"
                name="title"
                type="text"
                placeholder="Enter article title"
                size="large"
              />
              <Select
                label="Category"
                name="category"
                placeholder="Select a category"
                options={categoryList.map(category => {
                  return { value: category.id, label: category.name };
                })}
              />
            </div>
            <Textarea
              rows={15}
              label="Article Body"
              name="body"
              type="text"
              placeholder="Enter description"
            />
            <div className="flex mt-4 space-x-2">
              <Submit
                isSubmitting={isSubmitting}
                status={status}
                setStatus={setStatus}
              />
              <Link to="/">
                <Button style="text" label="Cancel" size="large" />
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ArticleForm;
