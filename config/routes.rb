# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  defaults format: :json do
    resources :articles, only: %i[create index show destroy update]
    resources :categories, only: %i[index create]
    resources :general, only: %i[create]

  end
  root "home#index"
  get "*path", to: "home#index", via: :all
end
