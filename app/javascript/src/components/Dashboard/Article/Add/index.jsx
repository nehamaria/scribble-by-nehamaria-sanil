import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui";
import { useHistory } from "react-router";

import articleApi from "apis/article";
import categoryApi from "apis/category";

import ArticleForm from "../Form/ArticleForm";

const AddArticle = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [status, setStatus] = useState("Save Draft");
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    const { title, category, body } = values;
    const payload = {
      title: title,
      category_id: category.value,
      body: body,
      status: status.includes("Draft") ? "Draft" : "Published",
    };
    try {
      setSubmitted(true);
      await articleApi.create(payload);
      history.push("/");
    } catch (error) {
      logger.error(error);
    }
  };

  const fetchCategoryList = async () => {
    try {
      const response = await categoryApi.categoryList();
      setCategoryList(response.data.categories);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => fetchCategoryList(), []);

  if (loading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <ArticleForm
        handleSubmit={handleSubmit}
        categoryList={categoryList}
        status={status}
        setStatus={setStatus}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
    </div>
  );
};

export default AddArticle;
