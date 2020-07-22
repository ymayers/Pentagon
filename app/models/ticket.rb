require 'securerandom'

class Ticket < ApplicationRecord
  belongs_to :event
  belongs_to :user

  after_create :generate_code

  def generate_code
    self.code = SecureRandom.hex
    save
  end

end
