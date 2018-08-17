import React from 'react'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import '../css/Reviews.css'

const ReviewsPage = () => {
    return (
      <div>
        <style>
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC');
        </style>
        <h1 className="reviewstag">Reviews</h1>
      <Reviews />
      <h2 className="reviewstag">Submit a Review</h2>
      <ReviewForm />
      </div>
    )
  }

export default ReviewsPage