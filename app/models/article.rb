# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :category
  belongs_to :author
  validates :title, presence: true
  validates :body, presence: true
end
