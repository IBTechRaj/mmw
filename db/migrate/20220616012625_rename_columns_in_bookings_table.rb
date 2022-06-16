class RenameColumnsInBookingsTable < ActiveRecord::Migration[6.1]
  def change
    rename_column :bookings, :bkgDate, :bkg_date
    rename_column :bookings, :bkgTime, :bkg_time
  end
end
