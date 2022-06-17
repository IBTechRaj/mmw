class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :created_at, :usertype, :first_name, :last_name, :mobile, :pincode
end
