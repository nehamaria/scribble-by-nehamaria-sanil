# frozen_string_literal: true

require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  def setup
    @category = build(:category)
  end

  def test_category_should_be_valid
    assert @category.valid?
  end

  def test_category_should_not_be_valid_without_name
    @category.name = nil
    assert @category.invalid?
    assert_includes @category.errors[:name], t("errors.messages.blank")
  end

  def test_category_should_be_of_valid_length
    @category.name = "a" * 100
    assert @category.invalid?
  end
end
