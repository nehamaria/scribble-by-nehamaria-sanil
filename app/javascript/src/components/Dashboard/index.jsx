import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Container } from "neetoui/layouts";

import Article from "./Article";
import { COLUMNS } from "./constant";
import SideBar from "./SideBar";
import SubHeader from "./SubHeader";

import articleApi from "../../apis/article";
import categoryApi from "../../apis/category";

const Dashboard = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [articleList, setArticleList] = useState({});
  const [selectedColumns, setSelectedColumns] = useState(
    COLUMNS.map(({ Header }) => Header)
  );
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      const categories = await categoryApi.categoryList();
      setCategoryList(categories.data.categories);
      const articles = await articleApi.articleList();
      setArticleList(articles.data);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async id => {
    try {
      await articleApi.destroy(id);
      fetchList();
    } catch (error) {
      logger.error(error);
    }
  };

  const handleChange = columnHeader => {
    if (selectedColumns.includes(columnHeader)) {
      setSelectedColumns(
        selectedColumns.filter(column => column !== columnHeader)
      );
    } else {
      setSelectedColumns([...selectedColumns, columnHeader]);
    }
  };

  useEffect(() => fetchList(), []);

  if (loading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="flex">
      <SideBar
        categoryList={categoryList}
        articlesCount={articleList.articles.length}
        draftCount={articleList.draft_count}
        publishedCount={articleList.published_count}
      />
      <Container>
        <SubHeader
          handleChange={handleChange}
          selectedColumns={selectedColumns}
        />
        <Article
          articleList={articleList.articles}
          handleDelete={handleDelete}
          selectedColumns={selectedColumns}
        />
      </Container>
    </div>
  );
};

export default Dashboard;
