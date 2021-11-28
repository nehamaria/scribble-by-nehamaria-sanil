# frozen_string_literal: true

require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = build(:article)
  end

  def test_article_should_be_valid
    # byebug
    assert @article.valid?
  end

  def test_title_should_be_present
    @article.title = nil
    assert @article.invalid?
    assert_includes @article.errors[:title], t("errors.messages.blank")
  end

  def test_body_should_be_present
    @article.body = nil
    assert @article.invalid?
    assert_includes @article.errors[:body], t("errors.messages.blank")
  end

  def test_status_should_not_have_invalid_status
    assert_raises ArgumentError do
      @article.status = "abc"
    end
  end

  def test_title_should_be_of_valid_length
    @article.title = "a" * 100
    assert @article.invalid?
  end
end
