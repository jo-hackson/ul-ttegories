module RandomLetter
  def self.get_letter
    alphabet = ("abcdefghjkmnpqrstuvwxyz").split("")
    alphabet.sample
  end
end
