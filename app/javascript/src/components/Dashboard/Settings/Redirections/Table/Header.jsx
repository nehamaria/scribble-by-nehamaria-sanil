import React from "react";

import { Typography } from "neetoui";

import { REDIRECTION_COLUMNS } from "components/Dashboard/Settings/constants";

const Header = () => {
  return (
    <thead>
      <tr className="text-left w-full neeto-ui-text-gray-500">
        {REDIRECTION_COLUMNS.map((title, index) => (
          <th key={index}>
            <Typography style="h5" className="p-3">
              {title.header}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
