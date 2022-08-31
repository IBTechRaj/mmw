class ServicesController < ApplicationController
  before_action :set_service, only: [:show, :update, :destroy]

  def index
    @services = Service.all
    render json: @services
  end

  def create
    @service = Service.new(service_params)

    if @service.save!
      render json: @service, status: :created, location: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  # def getServices
  #   render json: Service.getServices(params[:salon_id])
  # end
   # DELETE /cats/1
  def destroy
    @service.destroy
  end

  private

  def set_service
    @service = Service.find(params[:id])
  end

  def service_params
    params.permit(:sname, :price, :offerprice, :description)
  end

end

