class ToDoList < ApplicationRecord
  has_many :tasks, dependent: :destroy
end
