# frozen_string_literal: true

class General < ApplicationRecord
  MAX_NAME_LENGTH = 30
  VALID_PASSWORD_REGEX = /(?=.*[a-z])(?=.*[0-9])/i.freeze

  has_secure_password validations: false
  has_secure_token :authentication_token

  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :password, length: { minimum: 6 }, if: -> { password.present? }, format: { with: VALID_PASSWORD_REGEX }
end
