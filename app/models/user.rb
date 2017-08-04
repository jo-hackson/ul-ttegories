class User < ActiveRecord::Base
  
  has_many :results

	validates :password_hash, presence: true

  validates :username, uniqueness: { message: "-- That username already exists! Dig your brain for another one!" }
  validates :email, uniqueness: { message: "-- That email already exists! Are you trying to sneak one past me?!" }

  validates :email, presence: { message: "-- A email must be provided." }
  validates :username, presence: { message: "-- A username must be provided." }


  def password
    @password ||= BCrypt::Password.new(password_hash)
  end

  def password=(entered_password)
    @password = BCrypt::Password.create(entered_password)
    self.password_hash = @password
  end

  def authenticate(plain_text_password)
    self.password == plain_text_password
  end


end
