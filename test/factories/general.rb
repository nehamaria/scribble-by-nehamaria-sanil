# frozen_string_literal: true

FactoryBot.define do
  factory :general do
    name { Faker::Name.name }
    password { "abcde1" }
  end
end
