import React, { useState } from "react";

import { Delete, Edit } from "neetoicons";
import { Button } from "neetoui";

import EditRedirections from "../Edit";

const Row = ({ row, handleDelete, fetchRedirectionList }) => {
  const [updateRedirections, setUpdateRedirections] = useState({
    id: "",
    from_path: "",
    to_path: "",
  });
  return (
    <tr className=" bg-white border-b-8 border-indigo-100 ">
      {updateRedirections.id === row.id ? (
        <EditRedirections
          updateRedirections={updateRedirections}
          setUpdateRedirections={setUpdateRedirections}
          fetchRedirectionList={fetchRedirectionList}
          rowId={row.id}
        />
      ) : (
        <>
          <td className="text-left p-5 mx-4">
            <span className="neeto-ui-text-gray-400">https://scribble.com</span>
            {row.from_path}
          </td>
          <td className="text-left p-5 mx-4">{row.to_path}</td>
          <td>
            <Button
              style="text"
              icon={() => <Delete />}
              onClick={() => handleDelete(row.id)}
            />
            <Button
              style="text"
              icon={() => <Edit />}
              onClick={() =>
                setUpdateRedirections({
                  id: row.id,
                  from_path: row.from_path,
                  to_path: row.to_path,
                })
              }
            />
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
