# frozen_string_literal: true

class Redirection < ApplicationRecord
  validates :from_path, presence: true, uniqueness: true
  validates :to_path, presence: true
  before_validation :validate_paths

  private

    def validate_paths
      if self.from_path == self.to_path
        errors.add(:base, "Paths should not be same")
      end
    end
end
