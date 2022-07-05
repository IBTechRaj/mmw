class Contact < ApplicationRecord

    validates :subject, presence: true
    validates :name, presence: true
    validates :email, presence: true
    validates :message, presence: true
end
