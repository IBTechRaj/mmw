class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :area

  validates :bkg_date, presence: true
  validates :bkg_time, presence: true
  validates :service, presence: true
  validates :address1, presence: true
  validates :address2, presence: true
  validates :pincode, presence: true, length: { is: 6 }

  def self.getAreaDateBkgs(bkgDate , pincode)
    current_bkgs = Booking.where('bkg_date  = ? AND pincode = ?', bkgDate , pincode ).pluck(:bkg_time)
    today_list = current_bkgs.map{| bkg |
  bkg.strftime("%H:%M")
    }
    return today_list
  end
end
