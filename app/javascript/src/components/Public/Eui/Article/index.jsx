import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router";

import EmptyState from "components/Common/EmptyState";

import Preview from "./Preview";
import SideBar from "./SideBar";

const Article = ({ articleList, categoryList }) => {
  const [article, setArticle] = useState({});

  const { slug } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (!slug && articleList.length > 0) {
      history.push(`/public/${articleList[0].slug}`);
    } else {
      setArticle(
        articleList.find(currentArticle => currentArticle.slug === slug)
      );
    }
  }, [slug, articleList]);

  return (
    <div className="w-full flex space-x-4">
      {articleList.length > 0 ? (
        <>
          <SideBar categoryList={categoryList} article={article} />
          <Preview article={article} />
        </>
      ) : (
        <EmptyState message="No articles Found" />
      )}
    </div>
  );
};

export default Article;
