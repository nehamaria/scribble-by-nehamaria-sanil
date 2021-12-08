# frozen_string_literal: true

require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = create(:article)
    @category = create(:category)
    @user = create(:user)
  end

  def test_article_should_be_valid
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

  def test_slug_is_parameterized_title
    title = @article.title
    @article.save!
    assert_equal title.parameterize, @article.slug
  end

  def test_slug_generation_for_articles_having_titles_one_being_prefix_of_the_other
    article_one = Article.create!(
      title: "ring", body: "ring", status: "Draft", category_id: @category.id,
      user_id: @user.id)
    article_two = Article.create!(
      title: "ringing", body: "ringing", status: "Published",
      category_id: @category.id, user_id: @user.id)
    assert_equal "ring", article_one.slug
    assert_equal "ringing", article_two.slug
  end

  def test_error_raised_for_duplicate_slug
    article_test = Article.create!(
      title: "ring", body: "ring", status: "Draft", category_id: @category.id,
      user_id: @user.id)
    assert_raises ActiveRecord::RecordInvalid do
      article_test.update!(slug: @article.slug)
    end
    error_msg = article_test.errors.full_messages.to_sentence
    assert_match t("article.slug.immutable"), error_msg
  end
end
