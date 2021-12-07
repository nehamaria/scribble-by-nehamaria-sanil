# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @general = General.first
    unless @general.authenticate(login_params[:password])
      render status: :unauthorized, json: { error: "Incorrect password,try again" }
    end
  end

  private

    def login_params
      params.require(:login).permit(:password)
    end
end
