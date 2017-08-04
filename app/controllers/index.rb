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

post '/results' do

	content_type :json
	return {
		1 => [params["1"], "+1"],
		2 => [params["2"], "+2"],
		3 => [params["3"], "+3"],
		4 => [params["4"], "+4"],
		5 => [params["5"], "+1"],
		6 => [params["6"], "+1"],
		7 => [params["7"], "+1"],
		8 => [params["8"], "+1"],
		9 => [params["9"], "+1"],
		10 => [params["10"], "+1"]
	}.to_json


end

