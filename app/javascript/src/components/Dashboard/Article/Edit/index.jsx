import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui";
import { useParams, useHistory } from "react-router";

import articleApi from "apis/article";
import categoryApi from "apis/category";

import ArticleForm from "../Form/ArticleForm";

const Edit = () => {
  const [articleDetails, setArticleDetails] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [status, setStatus] = useState("");
  const [initialForm, setInitialForm] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const setFormValues = articles => {
    const selectedForm = (({ title, body, category }) => ({
      title,
      body,
      category,
    }))(articles);
    selectedForm.category = selectedForm.category
      ? {
          value: selectedForm.category.id,
          label: selectedForm.category.name,
        }
      : null;
    return selectedForm;
  };

  const fetchDetails = async () => {
    try {
      setSubmitted(true);
      const article = await articleApi.show(id);
      setArticleDetails(article.data.articles);
      const response = await categoryApi.categoryList();
      setCategoryList(response.data.categories);
      setInitialForm(setFormValues(article.data.articles));
      setStatus(
        article.data.articles.status.includes("Draft")
          ? "Save Draft"
          : "Save Published"
      );
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async values => {
    const { title, category, body } = values;
    const payload = {
      title: title,
      category_id: category.value,
      body: body,
      status: status.includes("Draft") ? "Draft" : "Published",
    };
    try {
      await articleApi.update(id, payload);
      history.push("/");
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => fetchDetails(), []);
  if (loading) {
    return <PageLoader />;
  }

  return (
    <ArticleForm
      articleDetails={articleDetails}
      status={status}
      setStatus={setStatus}
      categoryList={categoryList}
      handleSubmit={handleSubmit}
      initialForm={initialForm}
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
};

export default Edit;
