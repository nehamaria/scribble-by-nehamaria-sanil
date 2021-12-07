import React, { useState, useEffect } from "react";

import { Down, Right } from "neetoicons";
import { Typography } from "neetoui";
import { NavLink } from "react-router-dom";

const Item = ({ category, isSelected }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isSelected || isActive);
  }, [isSelected]);

  return (
    <div className="w-full mt-5 ">
      <div className="flex space-x-5" onClick={() => setIsActive(!isActive)}>
        {isActive ? <Down size={15} /> : <Right size={15} />}
        <Typography style="h4">{category.name}</Typography>
      </div>
      <div className="ml-8 mt-2">
        {isActive &&
          category.articles.map((article, index) => (
            <NavLink
              key={index}
              to={`/public/${article.slug}`}
              activeStyle={{ color: "#6366F1" }}
            >
              <div key={index}>{article.title}</div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Item;
