class CreateVilles < ActiveRecord::Migration
  def change
    create_table :villes do |t|
      t.string :Ville
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
