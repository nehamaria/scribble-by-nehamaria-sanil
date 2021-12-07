import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button, Typography } from "neetoui";

import redirectionApi from "apis/redirection";

import Header from "./Header";
import Row from "./Row";

import AddRedirections from "../Add";

const RedirectionsTable = ({ redirectionList, fetchRedirectionList }) => {
  const [addRedirections, setAddRedirections] = useState(false);

  const handleDelete = async id => {
    if (confirm("Do you want to delete the article?")) {
      try {
        await redirectionApi.destroy(id);
        fetchRedirectionList();
      } catch (error) {
        logger.error(error);
      }
    }
  };

  return (
    <table className="w-full ">
      <Header />
      <tbody>
        {redirectionList.length ? (
          redirectionList.map((row, index) => (
            <Row
              key={index}
              row={row}
              handleDelete={handleDelete}
              fetchRedirectionList={fetchRedirectionList}
            />
          ))
        ) : (
          <tr>
            <td
              className="table-cell text-center pt-4 align-middle neeto-ui-text-gray-500"
              colSpan="3"
            >
              <Typography>No redirections found</Typography>
            </td>
          </tr>
        )}

        {addRedirections && (
          <tr className="bg-white border-b-8 border-indigo-100">
            <AddRedirections
              fetchRedirectionList={fetchRedirectionList}
              setAddRedirections={setAddRedirections}
            />
          </tr>
        )}
        <tr>
          <td className="pt-6 ">
            <Button
              style="link"
              icon={() => <Plus size={18} />}
              iconPosition="left"
              label={<Typography style="body1">Add New Redirection</Typography>}
              onClick={() => setAddRedirections(!addRedirections)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RedirectionsTable;
