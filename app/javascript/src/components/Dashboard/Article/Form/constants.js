import * as yup from "yup";

export const VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  category: yup
    .object()
    .shape({
      value: yup.string(),
      label: yup.string(),
    })
    .nullable()
    .required("Correct answer is required."),
  body: yup.string().required("Description is required"),
});

export const INITIAL_FORM_VALUES = { title: "", category: null, body: "" };
