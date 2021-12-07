import React from "react";

import { Typography } from "neetoui";

const NavBar = ({ siteDetails }) => {
  return (
    <div className="w-full border-b p-5 flex items-center">
      <Typography style="h3" className="flex w-full justify-center ">
        {siteDetails.name}
      </Typography>
    </div>
  );
};

export default NavBar;
