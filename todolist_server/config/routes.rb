Rails.application.routes.draw do
  resources :to_do_lists do
    resources :tasks
  end
end
