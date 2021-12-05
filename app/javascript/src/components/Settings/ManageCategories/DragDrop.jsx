import React from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import categoryApi from "apis/category";

import Item from "./Item";

import EmptyState from "../../Common/EmptyState";
import { reorderCategories } from "../../helpers/functions";

const DragDrop = ({
  categoryList,
  fetchCategoryList,
  categoryPositions,
  setCategoryPositions,
}) => {
  const onDragEnd = param => {
    if (!param.destination) {
      return;
    }
    const source = param.source.index;
    const destination = param.destination.index;
    const tempList = Array.from(categoryPositions);

    tempList.splice(destination, 0, tempList.splice(source, 1)[0]);

    reorderCategories(tempList, categoryList);
    setCategoryPositions(tempList);
    reorderList(tempList);
  };

  const reorderList = async tempList => {
    const payload = {
      category: tempList,
    };
    try {
      await categoryApi.sort(payload);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {categoryList.length ? (
                categoryList.map((category, index) => (
                  <Draggable
                    key={category.id}
                    draggableId={String(category.id)}
                    index={index}
                  >
                    {provided => (
                      <Item
                        provided={provided}
                        category={category}
                        fetchCategoryList={fetchCategoryList}
                      />
                    )}
                  </Draggable>
                ))
              ) : (
                <EmptyState message="No categories found" />
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
