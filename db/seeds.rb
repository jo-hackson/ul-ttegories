categories = CategoryParser.parse("./categories.txt")

categories.each do |category|
  Category.create!( :name => category.strip)
end

# will at some point have to figure out how to get this out 
# of the seed file

User.create!(
	:username => "jojo", 
	:first_name => "Joanna", 
	:password => "123", 
	:email => "ubbergorgeous@gmail.com"
	)