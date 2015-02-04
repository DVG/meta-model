module Api
  class ContainersController < ApplicationController
    def create
      @container = build_objects
      render json: @container, status: :ok
    end


private

    def build_objects
      container = Container.create(name: "Blah")
      posts_params = params[:container][:posts]
      people_params = params[:container][:people]
      posts_params.each do |post_params|
        post = Post.create(post_params)
        post.update_attributes(container: container)
      end
      people_params.each do |person_params|
        person = Person.create(person_params)
        person.update_attributes(container: container)
      end
      container
    end
  end

  
end
