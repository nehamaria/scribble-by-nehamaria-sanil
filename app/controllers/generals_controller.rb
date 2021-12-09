# frozen_string_literal: true

class GeneralsController < ApplicationController
  before_action :load_general, only: %i[show update]

  def update
    if @general.update(general_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "General") }
    else
      render status: :unprocessable_entity,
        json: { error: @general.errors.full_messages.to_sentence }
    end
  end

  private

    def load_general
      @general = General.first
      unless @general
        render status: :not_found, json: { error: t("general.not_found") }
      end
    end

    def general_params
      params.require(:general).permit(:name, :password)
    end
end
