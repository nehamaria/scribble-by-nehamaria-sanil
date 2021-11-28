# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def create
    category = Category.new(category_params)
    unless category.save
      render status: :unprocessable_entity, json: { error: category.error.full_messages.to_sentence }
    end
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end
end
