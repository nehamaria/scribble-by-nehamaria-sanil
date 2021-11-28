# frozen_string_literal: true

FactoryBot.define do
  factory :article do
    category
    title { Faker::Name.name }
    body { Faker::Lorem.paragraph }
    status { "Draft" }
  end
end
