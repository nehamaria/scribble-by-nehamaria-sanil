# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :load_article, only: %i[show destroy update]
  def index
    @articles = Article.all.order("updated_at DESC")
  end

  def create
    article = Article.new(article_params.merge(user_id: 1))
    if article.save
      render status: :ok,
        json: { notice: t("successfully_created", entity: "Article") }
    else
      render status: :unprocessable_entity, json: { error: article.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @article.destroy
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  def update
    if @article.update(article_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  private

    def load_article
      @article = Article.find_by_slug(params[:slug])
      unless @article
        render status: :not_found, json: { error: t("article.not_found") }
      end
    end

    def article_params
      params.require(:article).permit(:title, :body, :status, :category_id)
    end
end
