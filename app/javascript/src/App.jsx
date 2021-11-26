import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";

import NavBar from "./components/Common/NavBar";
import Dashboard from "./components/Dashboard";
import AddArticle from "./components/Dashboard/Article/AddArticle";
import Edit from "./components/Dashboard/Article/EditArticle";

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
        <Route exact path="/:id/update" component={Edit} />
      </Switch>
    </Router>
  );
};

export default App;
