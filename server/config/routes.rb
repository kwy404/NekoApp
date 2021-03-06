Rails.application.routes.draw do
  #devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post 'register', action: :create, controller: :users
      post 'login', action: :login, controller: :users
      post 'validation_token', action: :validation_token, controller: :users
    end
  end
end
