import React from "react";

import { Down } from "neetoicons";
import { Button, Dropdown } from "neetoui";

const Submit = ({ isSubmitting, setStatus, status }) => {
  return (
    <div className="flex rounded-md overflow-hidden bg-indigo-100 border-2 border-indigo-600">
      <div className="overflow-hidden mr-px neeto-ui-bg-secondary-indigo ">
        <Button
          type="submit"
          label={status}
          size="large"
          disabled={isSubmitting}
          loading={isSubmitting}
        />
      </div>
      <div className="neeto-ui-bg-secondary-indigo">
        <Dropdown icon={() => <Down className="" />} position="bottom-end">
          <li onClick={() => setStatus("Save Draft")}>Save Draft</li>
          <li onClick={() => setStatus("Save Published")}>Save Published</li>
        </Dropdown>
      </div>
    </div>
  );
};

export default Submit;
