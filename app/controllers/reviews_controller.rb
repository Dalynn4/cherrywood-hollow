class ReviewsController < ApplicationController

  def index
    render(
      status: 200,
      json: Review.all
    )
  end

  def create
    @review = Review.create(:user_name => params[:user_name], :content => params[:content])
    render json: @review
  end 

private

def review_params
  params.require(:review).permit(:userName, :content)
end
  
end
