class Container < ActiveRecord::Base
  has_many :people
  has_many :posts
end
