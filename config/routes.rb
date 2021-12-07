# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  defaults format: :json do
    resources :articles, only: %i[create index show destroy update], param: :slug
    resources :categories, only: %i[index create destroy update ] do
      post "sort", on: :collection
    end
    resource :general, only: %i[update show]

    resources :redirections, only: %i[create index show destroy update]
    resource :session, only: :create
    namespace :public do
      resources :categories, only: [:index]
    end

  end
  root "home#index"
  get "*path", to: "home#index", via: :all
end
