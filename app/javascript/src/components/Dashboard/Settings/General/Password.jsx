import React from "react";

import { useFormikContext } from "formik";
import { Check, Close } from "neetoicons";
import { Typography } from "neetoui";
import { Checkbox, Input } from "neetoui/formik";

import { PASSWORD_REGEX } from "../constants";

const Password = () => {
  const { values } = useFormikContext();
  return (
    <div className="pt-3">
      <Checkbox
        label={
          <Typography style="h6" className="text-black">
            Password Protect Knowledge Base
          </Typography>
        }
        id="isProtected"
        name="isProtected"
        className="mb-4"
      />
      {values.isProtected && (
        <>
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="*********"
          />
          <div className="flex mt-2">
            {values.password.length >= 6 ? (
              <Check color="green" />
            ) : (
              <Close color="red" size={18} className="mt-2 mr-1" />
            )}
            <Typography style="body3" className="mt-2">
              Have at least 6 characters
            </Typography>
          </div>
          <div className="flex mt-2">
            {values.password.match(PASSWORD_REGEX) ? (
              <Check color="green" />
            ) : (
              <Close color="red" size={18} className="mt-2 mr-1" />
            )}
            <Typography style="body3" className="mt-2">
              Include at least 1 letter and 1 number
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default Password;
