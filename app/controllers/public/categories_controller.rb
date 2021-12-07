# frozen_string_literal: true

class Public::CategoriesController < ApplicationController
  before_action :authenticate_using_x_auth_token

  def index
    @categories = Category.all
  end
end
