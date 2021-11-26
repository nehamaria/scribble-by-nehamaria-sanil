import React, { useState } from "react";

import { Plus, Search } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const SideBar = ({
  categoryList,
  articlesCount,
  draftCount,
  publishedCount,
}) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  return (
    <>
      <MenuBar showMenu title="Articles">
        <MenuBar.Block label="All" count={articlesCount} active />
        <MenuBar.Block label="Draft" count={draftCount} />
        <MenuBar.Block label="Published" count={publishedCount} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
            {
              icon: Plus,
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
        />
        {categoryList.map((category, index) => (
          <MenuBar.Block
            label={category.name}
            count={category.count}
            key={index}
          />
        ))}
      </MenuBar>
    </>
  );
};
export default SideBar;
