import React from "react";

import { Typography } from "neetoui";

const EmptyState = ({ message }) => {
  return (
    <div className="text-center w-full mt-10">
      <Typography style="h4" className="neeto-ui-text-gray-600">
        {message}
      </Typography>
    </div>
  );
};

export default EmptyState;
