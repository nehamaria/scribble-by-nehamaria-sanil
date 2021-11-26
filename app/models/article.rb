# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :category
  validates :title, presence: true
  validates :body, presence: true
  enum status: { Draft: 0, Published: 1 }
end
