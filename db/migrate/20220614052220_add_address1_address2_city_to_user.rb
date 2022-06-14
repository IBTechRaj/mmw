class AddAddress1Address2CityToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :address1, :string
    add_column :users, :address2, :string
    add_column :users, :city, :string
  end
end
