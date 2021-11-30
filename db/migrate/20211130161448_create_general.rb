# frozen_string_literal: true

class CreateGeneral < ActiveRecord::Migration[6.1]
  def change
    create_table :generals do |t|
      t.string :name, null: false
      t.string :password_digest
      t.timestamps
    end
  end
end
