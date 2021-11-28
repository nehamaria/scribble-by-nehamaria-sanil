import React, { useState } from "react";

import { Plus, Search } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import AddCategory from "./AddCategory";

const SideBar = ({
  categoryList,
  articleList,
  selectedStatus,
  selectedCategory,
  setSelectedStatus,
  setSelectedCategory,
  fetchCategoryList,
}) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [searchCategory, setSearchCategory] = useState("");
  const handleSearchCategory = e => {
    setSearchCategory(e.target.value);
  };

  return (
    <>
      <MenuBar showMenu title="Articles">
        <MenuBar.Block
          label="All"
          count={articleList.articles.length}
          active={selectedStatus === "All"}
          onClick={() => setSelectedStatus("All")}
        />
        <MenuBar.Block
          label="Draft"
          count={articleList.draft_count}
          onClick={() => setSelectedStatus("Draft")}
          active={selectedStatus === "Draft"}
        />
        <MenuBar.Block
          label="Published"
          count={articleList.published_count}
          onClick={() => setSelectedStatus("Published")}
          active={selectedStatus === "Published"}
        />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
            {
              icon: Plus,
              onClick: () =>
                setShowAddCategory(showAddCategory => !showAddCategory),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            CATEGORIES
          </Typography>
        </MenuBar.SubTitle>

        {showAddCategory && (
          <AddCategory
            fetchCategoryList={fetchCategoryList}
            setShowAddCategory={setShowAddCategory}
          />
        )}
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
          onChange={handleSearchCategory}
        />
        {categoryList
          .filter(category =>
            category.name?.toLowerCase().includes(searchCategory.toLowerCase())
          )
          .map((category, index) => (
            <MenuBar.Block
              label={category.name}
              count={category.count}
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              active={selectedCategory === category.name}
            />
          ))}
      </MenuBar>
    </>
  );
};
export default SideBar;
