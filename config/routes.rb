Rails.application.routes.draw do
  get 'web/index'
  resources :posts

  namespace :api, format: 'json' do
    resources :posts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
