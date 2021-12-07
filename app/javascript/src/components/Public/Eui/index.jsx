import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";

import categoryApi from "apis/category";

import Article from "./Article";

const Eui = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategoryList = async () => {
    try {
      const response = await categoryApi.publicCategoryList();
      setCategoryList(response.data.categories);
      const articles = response.data.categories.reduce((articles, category) => {
        const newArticles = category.articles.map(article => ({
          ...article,
          categoryName: category.name,
          categoryId: category.id,
        }));
        return [...articles, ...newArticles];
      }, []);
      setArticleList(articles);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => fetchCategoryList(), []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex">
      <Article articleList={articleList} categoryList={categoryList} />
    </div>
  );
};

export default Eui;
