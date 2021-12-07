# frozen_string_literal: true

json.articles @articles do |article|
  json.extract! article,
    :id,
    :title,
    :body,
    :status,
    :slug

  json.created_at article.Published? ? article.created_at.strftime("%B #{article.created_at.day.ordinalize}, %Y") : "-"
  json.author_name article.user.name
  json.category article&.category
end
json.draft_count @articles.where(status: "Draft").size
json.published_count @articles.where(status: "Published").size
