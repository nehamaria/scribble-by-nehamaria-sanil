# frozen_string_literal: true

class GeneralsController < ApplicationController
  def create
    general = General.new(general_params)
    unless general.save
      render status: :unprocessable_entity, json: { error: general.error.full_messages.to_sentence }
    end
  end

  private

    def general_params
      params.require(:general).permit(:name)
    end
end
