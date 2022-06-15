class ContactsController < ApplicationController
    def index
   
    end
   
    def new
      # @contact = Contact.new
    end
   
    def create
      @contact = Contact.new(contact_params)
      if @contact.save!
        ContactsMailer.contact_email(@contact).deliver_now
      else
        render :new
      end
    end
   
    def show
      @contact = Contact.find_by(id: params[:id])
    end
   
    private 
   
    def contact_params
      params.permit(
        :subject,
        :name,
        :email,
        :message
      )
    end
  end
  