import React from "react";

import { ExternalLink } from "neetoicons";
import { Button, Typography } from "neetoui";
import { Header } from "neetoui/layouts";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Header
      actionBlock={
        <Button
          label="Preview"
          style="secondary"
          className="mr-4"
          to="/public"
          icon={() => <ExternalLink className="ml-2" />}
        />
      }
      title={
        <div className="flex ml-8 mt-2 space-x-8">
          <Link to="/">
            <Typography style="h4">Scribble</Typography>
          </Link>
          <NavLink
            exact
            to="/"
            className="neeto-ui-text-gray-500"
            activeStyle={{ color: "#6366F1" }}
          >
            <Typography style="h4">Articles</Typography>
          </NavLink>

          <NavLink
            to="/settings"
            className="neeto-ui-text-gray-500"
            activeStyle={{ color: "#6366F1" }}
          >
            <Typography style="h4">Settings</Typography>
          </NavLink>
        </div>
      }
      className="border border-bottom-0"
    />
  );
};

export default NavBar;
