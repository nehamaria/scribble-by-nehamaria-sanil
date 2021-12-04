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
        {redirectionList.map((row, index) => (
          <Row
            row={row}
            key={index}
            handleDelete={handleDelete}
            fetchRedirectionList={fetchRedirectionList}
          />
        ))}

        {addRedirections && (
          <tr className="bg-white border-b-8 border-indigo-100 mr-10">
            <AddRedirections
              fetchRedirectionList={fetchRedirectionList}
              setAddRedirections={setAddRedirections}
            />
          </tr>
        )}
        <tr>
          <td>
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
