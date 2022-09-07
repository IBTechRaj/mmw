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
 devise_scope :user  do
          get "/list_users", to: "users/registrations#list_users", as: "list_all_users"
          get "/list_agents", to: "users/registrations#list_agents", as: "list_all_agents"
        end
  # resources :users, only: [:index]

    resources :contacts
    resources :areas
   
  resources :bookings
  resources :services
end
