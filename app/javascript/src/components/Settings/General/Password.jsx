import React, { useState } from "react";

import { Checkbox, Typography, Input } from "neetoui";

import Validation from "./Validation";

const Password = () => {
  const [password, setPassword] = useState("");
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);
  return (
    <div className="pt-3">
      <Checkbox
        id="checkbox_name"
        label={
          <Typography style="h6" className="text-black">
            Password Protect Knowledge Base
          </Typography>
        }
        checked={isPasswordChecked}
        name="isChecked"
        onClick={() => setIsPasswordChecked(!isPasswordChecked)}
      />
      {isPasswordChecked && (
        <>
          <div className=" w-2/4 mt-5">
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Validation password={password} />
        </>
      )}
    </div>
  );
};

export default Password;
