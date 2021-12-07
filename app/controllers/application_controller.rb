# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def authenticate_using_x_auth_token
    auth_token = request.headers["X-Auth-Token"].presence
    general = General.first
    return @general = general if general.password_digest.nil?

    if general.password_digest.present? && (auth_token.present?) &&
      (ActiveSupport::SecurityUtils.secure_compare(
        general.authentication_token, auth_token
      ))
      @general = general
    else
      render status: :unauthorized, json: {
        error: "Could not authenticate with the provided credentials"
      }
    end
  end
end
