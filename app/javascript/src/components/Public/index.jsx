import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Route, Switch, Redirect } from "react-router-dom";

import { setAuthHeaders } from "apis/axios";
import generalApi from "apis/general";
import { getFromLocalStorage } from "helpers/storage";

import Authentication from "./Authentication";
import Eui from "./Eui";
import NavBar from "./NavBar";

const Public = () => {
  const [siteDetails, setSiteDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const authenticationToken = getFromLocalStorage("authToken");

  const fetchAuthDetails = async () => {
    try {
      const response = await generalApi.show();
      setSiteDetails(response.data);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAuthDetails();
    setAuthHeaders();
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <>
      <NavBar siteDetails={siteDetails} />
      <Switch>
        <Route
          exact
          path="/public/authenticate"
          component={() => <Authentication siteDetails={siteDetails} />}
        />
        {siteDetails.isProtected && !authenticationToken && (
          <Redirect to="/public/authenticate" />
        )}
        <Route exact path="/public" component={Eui} />
        <Route exact path="/public/:slug" component={Eui} />
      </Switch>
    </>
  );
};

export default Public;
