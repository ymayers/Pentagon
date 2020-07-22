Rails.application.routes.draw do

  get '/qrcode/:id', to: 'tickets#showqr'

  resources :credit_cards
  resources :tickets
  resources :events
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
