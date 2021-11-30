import React from "react";

import { Settings, Repeat, Seo } from "neetoicons";

import Item from "./Item";

const SideBar = () => {
  return (
    <div className=" p-6 max-w-sm space-y-6  border-r h-screen-x">
      <Item
        icon={() => <Settings />}
        name="General"
        body="Page Title, Brand Name & Meta Description"
        route="/settings"
      />

      <Item
        icon={() => <Repeat />}
        name="Redirections"
        body="Create & configure redirection rules"
        route="/settings/redirections"
      />

      <Item
        icon={() => <Seo />}
        name="Manage categories"
        body="Edit and Reorder KB Structure"
        route="/settings/manage-categories"
      />
    </div>
  );
};

export default SideBar;
