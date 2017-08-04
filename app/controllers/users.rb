get '/users/register' do 
	erb :'users/register'
end

post '/users/register' do 
	binding.pry
	user = User.create!(params[:user])
	binding.pry

end

get '/users/login' do 
	if request.xhr?
		erb :'/users/_login', layout: false
	else
		erb :'/users/login'
	end
end

post '/users/login' do 
	# stopped where users input their login information 
	# and get signed in
	#  will proceed to assume all users are FB connected
  @user = User.find_by(first_name: params[:first_name])
  binding.pry
  if @user
  	200
    session[:user_id] = @user.id
  else
  	422
    # @error = "Invalid entry. Try Again."
    # erb :'users/login'
  end

end

get '/users/:id/profile' do

	"hello"
	# binding.pry
	# @user = User.where("email = ?", params[:email])[0]
	# binding.pry
	# if request.xhr?
	# 	if @user
	# 		binding.pry

	# 		content_type :json

	# 		# take to profile page
	# 		# erb :'/users/profile'
	# 	else
	# 		binding.pry
	# 		@user = User.create!( :username  => Faker::Pokemon.name,
	# 							 :first_name => params[:first_name],
	# 			                 :email      => params[:email],
	# 			                 :password   => '123',
	#               			   )
	# 		binding.pry
	# 		# have to account for people without facebook
	# 		# but if they don't have FB, will not be coming in through here?
	# 		# or will they?
	# 		# redirect '/register'
	# 		# create user later
	# 		# User.create!()
	# 		# binding.pry
	# 	end
	# 	# erb :'/users/profile'
	# end
end

