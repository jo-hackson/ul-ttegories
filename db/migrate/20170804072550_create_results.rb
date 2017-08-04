class CreateResults < ActiveRecord::Migration
  def change
  	create_table :results do |t|
  		t.string		:result
  		t.integer		:player_id

  		t.timestamps
  end
end
