import React, { useEffect, useState } from "react";

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { registerIntercepts, setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import Public from "components/Public";

import redirectionApi from "./apis/redirection";

const App = () => {
  const [redirectionList, setRedirectionList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRedirectionList = async () => {
    setLoading(true);
    try {
      const redirections = await redirectionApi.redirectionList();
      setRedirectionList(redirections.data.redirections);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    registerIntercepts();
    initializeLogger();
    setAuthHeaders(setLoading);
    fetchRedirectionList();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        {redirectionList.map((redirection, index) => (
          <Redirect
            key={index}
            exact
            from={redirection.from_path}
            to={redirection.to_path}
          />
        ))}
        <Route path="/public" component={Public} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
