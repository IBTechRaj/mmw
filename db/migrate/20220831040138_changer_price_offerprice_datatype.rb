class ChangerPriceOfferpriceDatatype < ActiveRecord::Migration[6.1]
  def change
    change_column :services, :price, :decimal, :precision => 5
    change_column :services, :offerprice, :decimal, :precision => 5
  end
end
