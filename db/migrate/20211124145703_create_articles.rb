# frozen_string_literal: true

class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :status, null: false
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end
  end
end