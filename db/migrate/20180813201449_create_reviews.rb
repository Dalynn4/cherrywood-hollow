class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :user_name
      t.string :content
      t.integer :rating

      t.timestamps
    end
  end
end
