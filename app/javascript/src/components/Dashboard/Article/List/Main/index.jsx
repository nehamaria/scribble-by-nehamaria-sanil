import React from "react";

import { Typography } from "neetoui";

import EmptyState from "components/Common/EmptyState";

import Table from "./Table";

const Main = ({
  articleList,
  handleDelete,
  selectedColumns,
  selectedStatus,
  selectedCategory,
  searchTitle,
}) => {
  const filteredArticles = articleList.filter(
    article =>
      (selectedStatus === "All" || article.status === selectedStatus) &&
      (selectedCategory === "" ||
        article.category?.name === selectedCategory) &&
      article.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  return (
    <>
      {filteredArticles.length > 0 ? (
        <>
          <Typography style="h4" className="mb-5">
            {filteredArticles.length} Articles
          </Typography>
          <Table
            articleList={filteredArticles}
            handleDelete={handleDelete}
            selectedColumns={selectedColumns}
          />
        </>
      ) : (
        <EmptyState message="No Articles Found" />
      )}
    </>
  );
};

export default Main;
