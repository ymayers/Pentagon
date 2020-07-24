class User < ApplicationRecord
  # belongs_to :credit_card
  has_many :tickets
  has_many :events, through: :tickets

  has_secure_password
  
end
