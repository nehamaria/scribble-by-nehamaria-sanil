import React, { useState, useEffect } from "react";

import { Typography, PageLoader } from "neetoui";

import redirectionApi from "apis/redirection";

import RedirectionsTable from "./Table";

const Redirections = () => {
  const [redirectionList, setRedirectionList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => fetchRedirectionList(), []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="space-y-4 max-w-2xl w-full mx-auto py-6">
        <Typography style="h2">Redirections</Typography>
        <Typography style="body2" className="neeto-ui-text-gray-600">
          Create and configure redirection rules to send users from old links to
          new links. All redirections are performed with 301 status codes to be
          SEO friendly.
        </Typography>
        <div className="p-5 bg-indigo-50">
          <RedirectionsTable
            redirectionList={redirectionList}
            setRedirectionList={setRedirectionList}
            fetchRedirectionList={fetchRedirectionList}
          />
        </div>
      </div>
    </>
  );
};

export default Redirections;
