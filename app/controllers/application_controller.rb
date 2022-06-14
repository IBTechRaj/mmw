class ApplicationController < ActionController::API
    before_action :configure_permitted_parameters, if: :devise_controller?


    protected
  
    # If you have extra params to permit, append them to the sanitizer.
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :gender, :date_of_birth, :address1, :address2, :city, :mobile, :pincode, :usertype])
    end
end
