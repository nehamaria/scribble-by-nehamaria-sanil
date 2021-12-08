# frozen_string_literal: true

class AddUniqueConstraint < ActiveRecord::Migration[6.1]
  def change
    add_index :redirections, :from_path, unique: true
  end
end
