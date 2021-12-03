# frozen_string_literal: true

class Category < ActiveRecord::Base
  MAX_NAME_LENGTH = 30
  acts_in_sequence
  has_many :articles, dependent: :nullify
  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
end
