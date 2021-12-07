# frozen_string_literal: true

json.categories @categories do |category|
  json.extract! category,
    :id,
    :name,
    :sequence
  json.count category.articles.size
  json.articles category.articles.Published do |article|
    json.extract! article,
      :slug,
      :title,
      :body,
      :created_at
  end
end
