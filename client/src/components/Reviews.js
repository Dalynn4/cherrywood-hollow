import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/fetchReviews'
import Likes from './Likes'

class Reviews extends Component {



 componentDidMount() {
  this.props.fetchReviews
 }



 renderReviews = () => {
   if (Array.isArray(this.props.reviews)) {
     return this.props.reviews.map(review =><li className="review" key={review.id}>{review.user_name}:<br/><p className="reviewcontent">{review.content}</p> <Likes/> </li>)
   }else {
     return this.props.reviews
   }
 }

  render() {
    return (
      <div>
      {this.renderReviews()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: dispatch(fetchReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)