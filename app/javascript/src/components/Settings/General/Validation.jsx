import React from "react";

import { Check, Close } from "neetoicons";
import { Typography } from "neetoui";

import { PASSWORD_REGEX } from "../constants";

const Validation = ({ password }) => {
  return (
    <>
      <div className="flex mt-2">
        {password.length >= 6 ? (
          <Check color="green" />
        ) : (
          <Close color="red" size={18} className="mt-2 mr-1" />
        )}
        <Typography style="body3" className="mt-2">
          Have at least 6 characters
        </Typography>
      </div>
      <div className="flex mt-2">
        {password.match(PASSWORD_REGEX) ? (
          <Check color="green" />
        ) : (
          <Close color="red" size={18} className="mt-2 mr-1" />
        )}
        <Typography style="body3" className="mt-2">
          Include at least 1 letter and 1 number
        </Typography>
      </div>
    </>
  );
};

export default Validation;
