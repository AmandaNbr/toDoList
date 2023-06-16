class RenameIsDoneColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :tasks, :isDone, :is_done
  end
end
