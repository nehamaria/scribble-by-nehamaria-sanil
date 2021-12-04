import React, { useState, useEffect } from "react";

import { Plus } from "neetoicons";
import { PageLoader, Typography, Button } from "neetoui";

import categoryApi from "apis/category";

import DragDrop from "./DragDrop";

import AddCategory from "../../Dashboard/AddCategory";

const ManageCategories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [addCategory, setAddCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryPositions, setCategoryPositions] = useState([]);

  const fetchCategoryList = async () => {
    try {
      const response = await categoryApi.categoryList();
      setCategoryList(response.data.categories);
      const categoryIdOrder = response.data.categories.map(
        category => category.id
      );
      setCategoryPositions(categoryIdOrder);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
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
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-1/2  space-y-6 mt-6">
        <div className="space-y-1">
          <Typography style="h3">Manage Categories</Typography>
          <Typography style="body2" className="neeto-ui-text-gray-600">
            Create and configure the categories inside your scribble.
          </Typography>
        </div>
        <div>
          <Button
            style="link"
            icon={() => <Plus size={18} />}
            iconPosition="left"
            label={<Typography style="body1">Add new category</Typography>}
            onClick={() => setAddCategory(!addCategory)}
          />
        </div>
        {addCategory && (
          <AddCategory
            fetchCategoryList={fetchCategoryList}
            setShowAddCategory={setAddCategory}
          />
        )}
        <DragDrop
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          fetchCategoryList={fetchCategoryList}
          categoryPositions={categoryPositions}
          setCategoryPositions={setCategoryPositions}
        />
      </div>
    </div>
  );
};

export default ManageCategories;
