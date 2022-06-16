class BookingsController < ApplicationController
   
    before_action :set_booking, only: [:show, :update, :destroy]
    
    def index
        @bookings = Booking.all
        render json: @bookings
    end
    
    def create
        @booking = Booking.new(booking_params)
    
        if @booking.save!
        render json: @booking, status: :created, location: @booking
        else
        render json: @booking.errors, status: :unprocessable_entity
        end
    end
    
    def getAreaDateBkgs
        render json: Booking.getAreaDateBkgs( params[:bkg_date], params[:pincode])
    end

           # DELETE /cats/1
    def destroy
        @booking.destroy
    end
    
    private
    
    def set_booking
        @booking = Booking.find(params[:id])
    end
    
    def booking_params
        params.permit(:bkg_date, :bkg_time, :service, :address1, :address2, :pincode, :area_id, :user_id)
    end
         
end
