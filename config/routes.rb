Rails.application.routes.draw do

  get '/qrcode/:id', to: 'tickets#showqr'
  # get '/users_events_tickets', to: 'users#users_events_tickets'

  resources :credit_cards
  resources :tickets
  resources :events
  resources :users

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
