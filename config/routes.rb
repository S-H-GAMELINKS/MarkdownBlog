Rails.application.routes.draw do
  devise_for :users
  root 'web#index'

  get '/about',   to: 'web#index'
  get '/contact',   to: 'web#index'
  get '/blogs', to: 'web#index'
  get '/blogs/new', to: 'web#index'
  get '/blogs/:id', to: 'web#index'
  get '/blogs/:id/edit', to: 'web#index'

  resources :posts

  namespace :api, format: 'json' do
    resources :posts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
