import React, { useState } from "react";

import { Plus, Search } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import AddCategory from "../AddCategory";

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

        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
          onChange={handleSearchCategory}
        />
        {showAddCategory && (
          <AddCategory
            fetchCategoryList={fetchCategoryList}
            setShowAddCategory={setShowAddCategory}
          />
        )}
        {categoryList.length > 0 ? (
          <>
            {categoryList
              .filter(category =>
                category.name
                  ?.toLowerCase()
                  .includes(searchCategory.toLowerCase())
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
          </>
        ) : (
          <EmptyState message="No categories found" />
        )}
      </MenuBar>
    </>
  );
};
export default SideBar;
