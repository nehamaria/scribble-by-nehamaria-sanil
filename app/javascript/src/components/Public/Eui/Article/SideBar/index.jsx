import React from "react";

import Item from "./Item";

const SideBar = ({ categoryList, article }) => {
  return (
    <div className=" p-6 max-w-sm space-y-6 w-full  border-r h-screen-x">
      {categoryList.map(
        category =>
          category.articles.length > 0 && (
            <Item
              category={category}
              categoryList={categoryList}
              isSelected={article.categoryId === category.id}
            />
          )
      )}
    </div>
  );
};

export default SideBar;
