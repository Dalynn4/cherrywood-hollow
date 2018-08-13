class ReviewsController < ApplicationController

  def index
    render(
      status: 200,
      json: Review.all
    )
  end

  def new
  end 

  def show
  end
  
end
