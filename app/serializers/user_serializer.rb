class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :created_at, :usertype
end
