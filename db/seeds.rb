categories = CategoryParser.parse("./categories.txt")

categories.each do |category|
  Category.create!( :name => category.strip)
end
