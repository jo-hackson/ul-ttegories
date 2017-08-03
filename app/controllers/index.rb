get '/' do
  @letter = RandomLetter.get_letter.capitalize
  @categories = Category.get_categories
  erb :index
end

get '/results' do
  # @letter = RandomLetter.get_letter
  # @categories = Category.get_categories
  erb :results
end
