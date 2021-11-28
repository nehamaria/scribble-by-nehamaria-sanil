# frozen_string_literal: true

json.articles do
  json.extract! @article,
    :id,
    :title,
    :body,
    :status

  json.created_at @article.created_at.strftime("%B #{@article.created_at.day.ordinalize}, %Y")
  json.author_name "Oliver Smith"
  json.category @article.category
end
