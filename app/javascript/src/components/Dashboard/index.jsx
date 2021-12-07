import React from "react";

import { Switch, Route } from "react-router-dom";

import NavBar from "components/Common/NavBar";
import AddArticle from "components/Dashboard/Article/Add";
import Edit from "components/Dashboard/Article/Edit";

import ArticleList from "./Article/List";
import Settings from "./Settings";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/article/create" component={AddArticle} />
        <Route exact path="/:slug/update" component={Edit} />
        <Route path="/settings" component={Settings} />
        <Route exact path="/" component={ArticleList} />
      </Switch>
    </>
  );
};

export default Dashboard;
