class Result < ActiveRecord::Base

	belongs_to :player, :class_name => "User"
	
end
