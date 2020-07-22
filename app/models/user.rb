class User < ApplicationRecord
  # belongs_to :credit_card
  has_secure_password
  
end
