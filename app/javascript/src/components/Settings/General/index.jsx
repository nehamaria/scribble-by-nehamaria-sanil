import React from "react";

import { Typography } from "neetoui";

import GeneralForm from "./Form";

const General = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-1/2 mt-6">
        <Typography style="h2">General Settings</Typography>
        <Typography style="body1" className="neeto-ui-text-gray-600">
          Configure general attributes of scribble.
        </Typography>
        <GeneralForm />
      </div>
    </div>
  );
};

export default General;
