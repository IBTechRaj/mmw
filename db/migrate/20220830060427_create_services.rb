class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :sname
      t.decimal :price, precision: 5, scale: 2
      t.decimal :offerprice, precision:5, scale: 2

      t.timestamps
    end
  end
end
