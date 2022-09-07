# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_user!
  respond_to :json

  
  
  def list_users
    @users = User.where(usertype: 'client')
    render json: {
      status: 200,
      data: @users
    }
  end

  def list_agents
    @users = User.where(usertype: 'sprovider')
    render json: {
      status: 200,
      data: @users
    }
  end
  
  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: {
        status: {code: 200, message: 'Signed up sucessfully.'},
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }
    else
      render json: {
        status: {message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
  
end
