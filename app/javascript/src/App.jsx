import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import NavBar from "components/Common/NavBar";
import Dashboard from "components/Dashboard";
import AddArticle from "components/Dashboard/Article/Add";
import Edit from "components/Dashboard/Article/Edit";

import Settings from "./components/Settings";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    registerIntercepts();
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/create" component={AddArticle} />
        <Route exact path="/:slug/update" component={Edit} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
