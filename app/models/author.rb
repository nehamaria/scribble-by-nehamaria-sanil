# frozen_string_literal: true

class Author < ApplicationRecord
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  MAX_NAME_LENGTH = 50
  MAX_EMAIL_LENGTH = 255
  has_secure_password
  has_secure_token :authentication_token
  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :email, presence: true,
                    uniqueness: true,
                    length: { maximum: MAX_EMAIL_LENGTH },
                    format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: 6 }, if: -> { password.present? }
  validates :password_confirmation, presence: true, on: :create
  before_save :email_lowercase
  has_many :articles

  private

    def email_lowercase
      email.downcase!
    end
end
