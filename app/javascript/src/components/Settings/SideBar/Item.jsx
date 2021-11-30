import React from "react";

import { Typography } from "neetoui";
import { NavLink } from "react-router-dom";

const Item = ({ icon = () => {}, name, body, route }) => {
  return (
    <NavLink
      exact
      className={isActive => `flex w-full   ${isActive && " bg-gray-200"}`}
      to={route}
    >
      <div className="flex space-x-2 px-2 py-3">
        {icon()}
        <div className="flex flex-col">
          <Typography style="h5">{name}</Typography>
          <Typography style="body3">{body}</Typography>
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
