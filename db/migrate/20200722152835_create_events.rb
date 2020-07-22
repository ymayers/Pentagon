class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :imgURL
      t.integer :capacity
      t.string :ticket_cost
      t.string :gateway
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
