# frozen_string_literal: true

require "test_helper"

class RedirectionTest < ActiveSupport::TestCase
  def setup
    @redirection = build(:redirection)
  end

  def test_redirection_should_be_valid
    assert @redirection.valid?
  end

  def test_from_path_should_be_present
    @redirection.from_path = nil
    assert @redirection.invalid?
    assert_includes @redirection.errors[:from_path], t("errors.messages.blank")
  end

  def test_to_path_should_be_present
    @redirection.to_path = nil
    assert @redirection.invalid?
    assert_includes @redirection.errors[:to_path], t("errors.messages.blank")
  end

  def test_should_not_be_valid_and_saved_if_from_path_not_unique
    @redirection.save!

    test_redirection = @redirection.dup
    assert_not test_redirection.valid?

    assert_includes test_redirection.errors.full_messages, "From path has already been taken"
  end

  def test_should_not_be_valid_and_saved_if_from_path_and_to_path_are_same
    redirection = build :redirection, from_path: "/test1", to_path: "/test1"
    assert redirection.invalid?
  end
end
