import React, { useState } from "react";

import { Check } from "neetoicons";
import { Input } from "neetoui";

import categoryApi from "apis/category";

const AddCategory = ({ fetchCategoryList }) => {
  const [categoryName, setCategoryName] = useState("");
  const handleAddCategory = e => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      name: categoryName,
    };
    try {
      await categoryApi.create(payload);
      fetchCategoryList();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div>
      <Input
        placeholder="Search article title"
        suffix={<Check onClick={handleSubmit} />}
        onChange={handleAddCategory}
      />
    </div>
  );
};

export default AddCategory;
