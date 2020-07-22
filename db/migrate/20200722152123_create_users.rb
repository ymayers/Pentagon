class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :age
      t.string :email
      t.string :mobile_phone
      t.string :profile_imgURL
      t.string :id_imgURL
      t.string :password_digest

      t.timestamps
    end
  end
end
