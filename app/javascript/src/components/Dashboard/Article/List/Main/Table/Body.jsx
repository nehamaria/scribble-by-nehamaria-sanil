import React from "react";

const Body = ({ prepareRow, rows, getTableBodyProps }) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);

        return (
          <tr
            key={i}
            {...row.getRowProps()}
            className={`${i % 2 ? "bg-gray-100" : "bg-white"} `}
          >
            {row.cells.map((cell, index) => {
              return (
                <td
                  key={index}
                  {...cell.getCellProps()}
                  className={cell.column.className}
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
