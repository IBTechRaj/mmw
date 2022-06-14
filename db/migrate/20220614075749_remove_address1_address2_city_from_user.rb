class RemoveAddress1Address2CityFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :address1
    remove_column :users, :address2
    remove_column :users, :city
  end
end
