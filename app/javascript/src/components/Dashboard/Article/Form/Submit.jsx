import React from "react";

import { Down } from "neetoicons";
import { Button, Dropdown } from "neetoui";

const Submit = ({ isSubmitting, setStatus, status }) => {
  return (
    <div className="flex rounded-md overflow-hidden neeto-ui-bg-secondary-indigo">
      <Button
        type="submit"
        label={status}
        size="large"
        className=" rounded-l-none "
        disabled={isSubmitting}
        loading={isSubmitting}
      />
      <Dropdown
        icon={() => <Down className="border-l border-white  " />}
        position="bottom-end"
        buttonProps={{
          className: " rounded-r-none ",
        }}
      >
        <li onClick={() => setStatus("Save Draft")}>Save Draft</li>
        <li onClick={() => setStatus("Save Published")}>Save Published</li>
      </Dropdown>
    </div>
  );
};

export default Submit;
