import React, { useState } from "react";

import { Check } from "neetoicons";
import { Input } from "neetoui";

import categoryApi from "apis/category";

const AddCategory = ({ fetchCategoryList, setShowAddCategory }) => {
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
    } finally {
      setShowAddCategory(false);
    }
  };

  return (
    <div>
      <Input
        placeholder="Add Category"
        value={categoryName}
        suffix={<Check onClick={handleSubmit} />}
        onChange={handleAddCategory}
        onKeyDown={e => e.keyCode === 13 && handleSubmit()}
      />
    </div>
  );
};

export default AddCategory;
