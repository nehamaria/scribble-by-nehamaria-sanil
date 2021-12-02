import React from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Item from "./Item";

const DragDrop = ({ categoryList, setCategoryList, fetchCategoryList }) => {
  const onDragEnd = param => {
    if (!param.destination) {
      return;
    }
    const source = param.source.index;
    const destination = param.destination.index;
    const tempList = categoryList;

    tempList.splice(destination, 0, tempList.splice(source, 1)[0]);
    setCategoryList(tempList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {categoryList.map((category, index) => (
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
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
