import React, { useState } from "react";

import { Reorder, Delete, Edit, Check } from "neetoicons";
import { Typography, Button, Input } from "neetoui";

import categoryApi from "apis/category";

const Item = ({ provided, category, fetchCategoryList }) => {
  const [updateCategory, setUpdateCategory] = useState({ id: "", value: "" });
  const handleDelete = async id => {
    if (confirm("Do you want to delete the article?")) {
      try {
        await categoryApi.destroy(id);
        fetchCategoryList();
      } catch (error) {
        logger.error(error);
      }
    }
  };

  const handleSubmit = async () => {
    const payload = {
      name: updateCategory.value,
    };
    try {
      await categoryApi.update(updateCategory.id, payload);
      fetchCategoryList();
    } catch (error) {
      logger.error;
    } finally {
      setUpdateCategory({ id: "", value: "" });
    }
  };
  return (
    <>
      <div
        className="flex w-full justify-between items-center py-4 border-t border-gray-200 "
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="flex items-center gap-x-1">
          <div>
            <Reorder size={13} />
          </div>
          {updateCategory.id === category.id ? (
            <Input
              type="text"
              value={updateCategory.value}
              onChange={e =>
                setUpdateCategory(name => ({
                  ...name,
                  value: e.target.value,
                }))
              }
              suffix={<Check onClick={handleSubmit} />}
              onKeyDown={e => e.keyCode === 13 && handleSubmit()}
            />
          ) : (
            <Typography style="body2">{category.name}</Typography>
          )}
        </div>
        <div className="flex items-center gap-x-6">
          <Button
            icon={() => <Delete />}
            style="text"
            onClick={() => handleDelete(category.id)}
          />
          <Button
            icon={() => <Edit />}
            style="text"
            onClick={() =>
              setUpdateCategory({ id: category.id, value: category.name })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Item;
