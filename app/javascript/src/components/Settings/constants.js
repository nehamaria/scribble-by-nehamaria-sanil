export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[0-9])/i;
export const REDIRECTION_COLUMNS = [
  {
    header: "FROM PATH",
  },
  {
    header: "TO PATH",
  },
  {
    header: "ACTIONS",
  },
];

export const INITIAL_FORM_VALUES = {
  from_path: "",
  to_path: "",
};
