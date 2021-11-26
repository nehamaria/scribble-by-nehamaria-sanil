import React from "react";

import { ExternalLink } from "neetoicons";
import { Button, Typography } from "neetoui";
import { Header } from "neetoui/layouts";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Header
        actionBlock={
          <Button
            label="Preview"
            style="secondary"
            className="mr-4"
            icon={() => <ExternalLink className="ml-2" />}
          />
        }
        title={
          <div className="flex ml-8 mt-2 space-x-8">
            <Link to="/">
              <Typography style="h4">Scribble</Typography>
            </Link>
            <Link to="/">
              <Typography style="h4" className="neeto-ui-text-gray-500">
                Articles
              </Typography>
            </Link>
            <Link to="/">
              <Typography style="h4" className="neeto-ui-text-gray-500">
                Settings
              </Typography>
            </Link>
          </div>
        }
        className="border border-bottom-0"
      />
    </div>
  );
};

export default NavBar;
