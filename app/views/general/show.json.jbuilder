# frozen_string_literal: true

json.name @general.name
json.password @general.password
json.isProtected @general.password.present?
