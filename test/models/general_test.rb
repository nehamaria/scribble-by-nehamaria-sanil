# frozen_string_literal: true

require "test_helper"

class GeneralTest < ActiveSupport::TestCase
  def setup
    @general = build(:general)
  end

  def test_general_should_be_valid
    assert @general.valid?
  end

  def test_general_should_not_be_valid_without_name
    @general.name = ""
    assert @general.invalid?
  end

  def test_general_should_not_be_valid_with_incorrect_password_format
    @general.password = "abcde"
    assert @general.invalid?
  end

  def test_password_should_be_of_valid_length
    @general.password = "a" * 5
    assert @general.invalid?
  end
end
