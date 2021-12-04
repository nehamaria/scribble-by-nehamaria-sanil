# frozen_string_literal: true

json.name @general.name
json.isProtected @general.password_digest.present?
