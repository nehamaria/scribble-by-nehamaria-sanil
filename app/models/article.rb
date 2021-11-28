# frozen_string_literal: true

class Article < ApplicationRecord
  MAX_TITLE_LENGTH = 50
  belongs_to :category, optional: true
  validates :title, presence: true, length: { maximum: MAX_TITLE_LENGTH }
  validates :body, presence: true
  enum status: { Draft: 0, Published: 1 }
end
