# frozen_string_literal: true

class General < ApplicationRecord
  MAX_NAME_LENGTH = 30
  has_secure_password
  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :password, length: { minimum: 6 }, if: -> { password.present? }
end
