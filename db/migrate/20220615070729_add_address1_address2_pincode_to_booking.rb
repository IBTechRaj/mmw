class AddAddress1Address2PincodeToBooking < ActiveRecord::Migration[6.1]
  def change
    add_column :bookings, :address1, :string
    add_column :bookings, :address2, :string
    add_column :bookings, :pincode, :string
  end
end
