import React from "react";

import { Down } from "neetoicons";
import { Button, Dropdown } from "neetoui";

const Submit = ({ isSubmitting, setStatus, status }) => {
  return (
    <div className="flex neeto-ui-bg-secondary-indigo rounded-full">
      <Button
        type="submit"
        label={status}
        size="large"
        className="neeto-ui-bg-secondary-indigo rounded-l-none"
        disabled={isSubmitting}
        loading={isSubmitting}
      />
      <Dropdown
        icon={() => <Down className="border-l border-white  " />}
        position="bottom-end"
        buttonProps={{
          className: "neeto-ui-bg-secondary-indigo rounded-r-none",
        }}
      >
        <li onClick={() => setStatus("Save Draft")}>Save Draft</li>
        <li onClick={() => setStatus("Save Published")}>Save Published</li>
      </Dropdown>
    </div>
  );
};

export default Submit;
