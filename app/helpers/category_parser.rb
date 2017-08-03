module CategoryParser
  def self.parse(filename)
    categories = []
      File.open(filename).each do |category|
        categories << category
      end
    return categories
  end
end
