class AreasController < ApplicationController
    def index
      @areas = Area.all 
      render json: @areas 
    end
   
    def new
      @area = Area.new
    end
   
    def create
      @area = Area.new(area_params)
      if @area.save!
        render json: @area, status: :created, location: @area
        else
        render json: @area.errors, status: :unprocessable_entity
        end
    end
   
    def show
      @area = Area.find_by(id: params[:id])
    end
   
    private 
   
    def area_params
      params.permit(
        :pincode,
        :user_id
      )
    end
  end
  