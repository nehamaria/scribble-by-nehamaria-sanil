json.categories @categories do |category|
 json.extract! category,
 :id,
 :name
 json.count category.articles.size
end
