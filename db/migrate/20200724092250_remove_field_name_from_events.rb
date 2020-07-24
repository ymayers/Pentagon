class RemoveFieldNameFromEvents < ActiveRecord::Migration[6.0]
  def change
    remove_column :events, :imgURL, :string
  end
end
