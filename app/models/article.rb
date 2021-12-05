# frozen_string_literal: true

class Article < ApplicationRecord
  MAX_TITLE_LENGTH = 50
  is_sqlite_db = ActiveRecord::Base.connection_db_config.configuration_hash[:adapter] == "sqlite3"
  DB_REGEX_OPERATOR = is_sqlite_db ? "REGEXP" : "~*"
  belongs_to :category
  belongs_to :user
  validates :title, presence: true, length: { maximum: MAX_TITLE_LENGTH }
  validates :body, presence: true
  enum status: { Draft: 0, Published: 1 }

  before_create :set_slug

  def set_slug
    title_slug = title.parameterize
    regex_pattern = "slug #{DB_REGEX_OPERATOR} ?"
    latest_article_slug = Article.where(
      regex_pattern,
      "#{title_slug}$|#{title_slug}-[0-9]+$"
    ).order(slug: :desc).first&.slug
    slug_count = 0
    if latest_article_slug.present?
      slug_count = latest_article_slug.split("-").last.to_i
      only_one_slug_exists = slug_count == 0
      slug_count = 1 if only_one_slug_exists
    end
    slug_candidate = slug_count.positive? ? "#{title_slug}-#{slug_count + 1}" : title_slug
    self.slug = slug_candidate
  end
end
