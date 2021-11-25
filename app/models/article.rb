# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :category
  validates :title, presence: true
  validates :body, presence: true
  enum status: { draft: 0, published: 1 }
end
