class Area < ApplicationRecord
  belongs_to :user
  has_many :bookings
  
  validates :pincode, presence: true, length: { is: 6 }
end
