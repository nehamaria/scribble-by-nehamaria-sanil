# frozen_string_literal: true

class RedirectionsController < ApplicationController
  before_action :load_redirection, only: %i[show destroy update]
  def index
    @redirections = Redirection.all.order("updated_at DESC")
  end

  def create
    redirection = Redirection.new(redirection_params)
    if redirection.save
      render status: :ok,
        json: { notice: t("successfully_created", entity: "Redirection") }
    else
      render status: :unprocessable_entity, json: { error: redirection.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @redirection.destroy
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Redirection") }
    else
      render status: :unprocessable_entity,
        json: { error: @redirection.errors.full_messages.to_sentence }
    end
  end

  def update
    if @redirection.update(redirection_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Redirection") }
    else
      render status: :unprocessable_entity,
        json: { error: @redirection.errors.full_messages.to_sentence }
    end
  end

  private

    def load_redirection
      @redirection = Redirection.find_by(id: params[:id])
      unless @redirection
        render status: :not_found, json: { error: t("redirection.not_found") }
      end
    end

    def redirection_params
      params.require(:redirection).permit(:from_path, :to_path)
    end
end
