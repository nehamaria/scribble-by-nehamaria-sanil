import React from "react";

import { Search, Plus } from "neetoicons";
import { Input, Dropdown, Button, Checkbox } from "neetoui";
import { Link } from "react-router-dom";

import { COLUMNS } from "./constant";

const SubHeader = ({ handleChange, selectedColumns, handleSearchTitle }) => {
  return (
    <div className="flex justify-end  w-full space-x-4 mr-2 mt-5 mb-10">
      <div className="w-1/2">
        <Input
          placeholder="Search article title"
          prefix={<Search />}
          onChange={handleSearchTitle}
        />
      </div>
      <Dropdown
        buttonStyle="secondary"
        label="Columns"
        position="bottom-end"
        buttonProps={{ size: "large" }}
      >
        <div className="space-y-2 py-2">
          {COLUMNS.map((column, index) => (
            <Checkbox
              checked={selectedColumns.includes(column.Header)}
              id={`checkbox_${index}`}
              label={
                column.Header.charAt(0) + column.Header.slice(1).toLowerCase()
              }
              onChange={() => handleChange(column.Header)}
              key={index}
              className="px-2"
            />
          ))}
        </div>
      </Dropdown>
      <Link to="/article/create">
        <Button
          label="Add New Article"
          style="primary"
          icon={() => <Plus />}
          className="neeto-ui-bg-secondary-indigo"
        />
      </Link>
    </div>
  );
};

export default SubHeader;
