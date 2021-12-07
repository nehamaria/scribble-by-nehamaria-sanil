import React from "react";

const Header = ({ headerGroups }) => {
  return (
    <thead className="text-left ">
      {headerGroups.map((headerGroup, index) => (
        <tr key={index} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, index) => (
            <th
              key={index}
              {...column.getHeaderProps()}
              className="p-4 neeto-ui-text-gray-500"
            >
              {column.render("Header")}{" "}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
