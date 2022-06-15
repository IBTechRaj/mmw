class ContactsMailer < ApplicationMailer
    default :from => 'mymotorwash@gmail.com'
 
  def contact_email(contact)
    @contact = contact
    mail( to: @contact.email,
    subject: @contact.subject )
  end
end
