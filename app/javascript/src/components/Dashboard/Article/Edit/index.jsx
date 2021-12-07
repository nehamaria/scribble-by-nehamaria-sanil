import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui";
import { useParams, useHistory } from "react-router";

import articleApi from "apis/article";
import categoryApi from "apis/category";

import ArticleForm from "../Form/ArticleForm";

const EditArticle = () => {
  const [articleDetails, setArticleDetails] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [status, setStatus] = useState("");
  const [initialForm, setInitialForm] = useState({});
  const history = useHistory();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

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
      const article = await articleApi.show(slug);
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

  const handleSubmit = async (values, { setSubmitting }) => {
    const { title, category, body } = values;
    const payload = {
      title: title,
      category_id: category.value,
      body: body,
      status: status.includes("Draft") ? "Draft" : "Published",
    };
    try {
      await articleApi.update(slug, payload);
      history.push("/");
    } catch (error) {
      setSubmitting(false);
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
    />
  );
};

export default EditArticle;
