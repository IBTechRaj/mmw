# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "spro1@gmail.com",first_name: "ServiceMan", last_name: "one", gender: "male", date_of_birth: "2000-01-01", mobile: "9000001001",pincode: "500039", usertype: "sprovider", password: "rajraj")
User.create(email: "spro2@gmail.com",first_name: "ServiceMan2", last_name: "two", gender: "male", date_of_birth: "2000-01-01", mobile: "9000001001",pincode: "500007", usertype: "sprovider", password: "rajraj")
User.create(email: "spro3@gmail.com",first_name: "ServiceMan3", last_name: "three", gender: "male", date_of_birth: "2000-01-01", mobile: "9000001001",pincode: "500047", usertype: "sprovider", password: "rajraj")
Area.create(pincode: "500039",user_id: 30)
Area.create(pincode: "500007",user_id: 31)
Area.create(pincode: "500047",user_id: 32)