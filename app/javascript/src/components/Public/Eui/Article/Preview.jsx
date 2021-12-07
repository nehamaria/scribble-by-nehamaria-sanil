import React from "react";

import { Typography, Tag } from "neetoui";

import EmptyState from "components/Common/EmptyState";

const Preview = ({ article }) => {
  const date = new Date(article.created_at).toDateString().split(" ");

  return (
    <>
      {article ? (
        <div className="mt-4 space-y-2">
          <Typography style="h2">{article.title}</Typography>
          <div className="flex space-x-3">
            {article?.categoryName && (
              <Tag color="blue" label={article.categoryName} style="solid" />
            )}
            <Typography
              style="body2"
              className="neeto-ui-text-gray-500"
            >{`${date[2]} ${date[1]}, ${date[3]} `}</Typography>
          </div>

          <Typography style="body2">{article.body}</Typography>
        </div>
      ) : (
        <EmptyState message="No articles found" />
      )}
    </>
  );
};

export default Preview;
