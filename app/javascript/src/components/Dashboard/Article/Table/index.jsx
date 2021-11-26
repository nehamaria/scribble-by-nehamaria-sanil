import React from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { useTable } from "react-table";

import Body from "./Body";
import Header from "./Header";

import { COLUMNS } from "../../constant";

const Table = ({ articleList, handleDelete, selectedColumns }) => {
  const columns = React.useMemo(
    () => [
      ...COLUMNS.filter(column => selectedColumns.includes(column.Header)),
      {
        id: "Delete",
        accessor: "delete",
        Cell: ({ cell }) => (
          <Button
            style="text"
            icon={() => <Delete />}
            iconPosition="left"
            onClick={() => {
              handleDelete(cell.row.original.id);
            }}
          />
        ),
      },
      {
        id: "Edit",
        accessor: "edit",
        Cell: ({ cell }) => (
          <Button
            style="link"
            to={`/${cell.row.original.id}/update`}
            icon={() => <Edit />}
            iconPosition="left"
          />
        ),
      },
    ],
    [selectedColumns]
  );
  const data = React.useMemo(() => articleList, [articleList]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <table {...getTableProps()} className="w-full ">
        <Header headerGroups={headerGroups} />

        <Body
          prepareRow={prepareRow}
          rows={rows}
          getTableBodyProps={getTableBodyProps}
        />
      </table>
    </>
  );
};

export default Table;
