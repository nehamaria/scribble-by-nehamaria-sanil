import React from "react";

import { Route, Switch } from "react-router-dom";

import General from "./General";
import ManageCategories from "./ManageCategories";
import Redirections from "./Redirections";
import SideBar from "./SideBar";

const Settings = () => {
  return (
    <div className="flex">
      <SideBar />
      <Switch>
        <Route exact path="/settings" component={General} />
        <Route exact path="/settings/redirections" component={Redirections} />
        <Route
          exact
          path="/settings/manage-categories"
          component={ManageCategories}
        />
      </Switch>
    </div>
  );
};

export default Settings;
