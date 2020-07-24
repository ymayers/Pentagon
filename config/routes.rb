Rails.application.routes.draw do

  get '/qrcode/:id', to: 'tickets#showqr'
  get '/users_tickets_events', to: 'tickets#users_tickets_events'

  resources :credit_cards
  resources :users
  resources :tickets  
  resources :events
  

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
