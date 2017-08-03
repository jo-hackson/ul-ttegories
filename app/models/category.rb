class Category < ApplicationRecord

  # def initialize
  #   @category_names = category_names
  # end

  def self.get_categories
    all_categories_possible = self.retrieve_all
    return all_categories_possible.sample(10)
  end

  def self.retrieve_all
    categories = Category.select(:name)

    category_names = []
    categories.each do |category|
      category_names << category.name
    end
    return category_names
  end


end
