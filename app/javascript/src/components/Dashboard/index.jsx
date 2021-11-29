import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { Container } from "neetoui/layouts";

import articleApi from "apis/article";
import categoryApi from "apis/category";
import useDebounce from "components/Common/useDebounce";

import Article from "./Article/List";
import { COLUMNS } from "./constant";
import SideBar from "./SideBar";
import SubHeader from "./SubHeader";

const Dashboard = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [articleList, setArticleList] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [selectedColumns, setSelectedColumns] = useState(
    COLUMNS.map(({ Header }) => Header)
  );
  const debouncedSearchTitle = useDebounce(searchTitle, 500);

  const fetchArticleList = async () => {
    try {
      const articles = await articleApi.articleList();
      setArticleList(articles.data);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryList = async () => {
    try {
      const categories = await categoryApi.categoryList();
      setCategoryList(categories.data.categories);
    } catch (error) {
      logger.error(error);
    }
  };
  const handleDelete = async id => {
    try {
      await articleApi.destroy(id);
      fetchArticleList();
      fetchCategoryList();
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

  const handleSearchTitle = e => {
    setSearchTitle(e.target.value);
  };

  useEffect(() => {
    fetchArticleList();
    fetchCategoryList();
  }, []);

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="flex h-screen-x overflow-hidden">
      <SideBar
        categoryList={categoryList}
        articleList={articleList}
        selectedStatus={selectedStatus}
        selectedCategory={selectedCategory}
        setSelectedStatus={setSelectedStatus}
        setSelectedCategory={setSelectedCategory}
        fetchCategoryList={fetchCategoryList}
      />
      <Container>
        <SubHeader
          handleChange={handleChange}
          selectedColumns={selectedColumns}
          handleSearchTitle={handleSearchTitle}
        />
        <Article
          articleList={articleList.articles}
          handleDelete={handleDelete}
          selectedColumns={selectedColumns}
          selectedStatus={selectedStatus}
          selectedCategory={selectedCategory}
          searchTitle={debouncedSearchTitle}
        />
      </Container>
    </div>
  );
};

export default Dashboard;
