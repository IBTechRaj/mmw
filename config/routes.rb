Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
    resources :contacts
    resources :areas
   
    
  get 'bookings/:bkg_date/:pincode', to: 'bookings#getAreaDateBkgs'
  resources :bookings
  resources :services
end
