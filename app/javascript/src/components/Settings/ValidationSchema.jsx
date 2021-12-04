import * as yup from "yup";

export const VALIDATE_GENERAL_SCHEMA = yup.object({
  name: yup.string().required("This field is required"),
  password: yup.string().when("isProtected", {
    is: true,
    then: yup.string().required("Password cannot be blank"),
  }),
});

export const REDIRECTION_VALIDATION = yup.object({
  from_path: yup.string().required("Path is required"),
  to_path: yup.string().required("Path is required"),
});
