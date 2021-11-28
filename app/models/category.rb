# frozen_string_literal: true

class Category < ApplicationRecord
  MAX_NAME_LENGTH = 30
  has_many :articles
  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
end
