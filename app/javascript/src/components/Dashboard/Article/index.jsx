import React from "react";

import { Typography } from "neetoui";

import Table from "./Table";

const Article = ({ articleList, handleDelete, selectedColumns }) => {
  return (
    <>
      {articleList.length > 0 ? (
        <>
          <Typography style="h4" className="mb-5">
            {articleList.length} Articles
          </Typography>
          <Table
            articleList={articleList}
            handleDelete={handleDelete}
            selectedColumns={selectedColumns}
          />
        </>
      ) : (
        <div>No Articles Found</div>
      )}
    </>
  );
};

export default Article;
