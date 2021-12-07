# frozen_string_literal: true

class AddAuthenticationToken < ActiveRecord::Migration[6.1]
  def change
    add_column :generals, :authentication_token, :string
  end
end
