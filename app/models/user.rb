class User < ApplicationRecord
 include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

         VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

         enum gender: %i[female male other]
         enum usertype: %i[client sprovider admin]
             validates :first_name, presence: true
             validates :last_name, presence: true
             validates :address1, presence: true
             validates :address2, presence: true
             validates :gender, presence: true
             validates :date_of_birth, presence: true
             validates :email, presence: true, length:  3..244 ,
                 format: { with: VALID_EMAIL_REGEX },
                 uniqueness: {
                   message: ->(object, data) do
                     "Hey #{object.email}, #{data[:value]} is already taken."
                   end
                 }
             
             validates :usertype, presence: true
             validates :mobile, presence: true, length: { is: 10 }
             validates :pincode, presence: true, length: { is: 6 }
end
