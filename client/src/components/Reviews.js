import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/fetchReviews'

class Reviews extends Component {

  //state = {
  // userName: "Name",
  //content: "Review or Comment",
  //  reviews: []
  //}

 componentDidMount() {
  this.props.fetchReviews
 }

 renderReviews = () => {
   if (Array.isArray(this.props.reviews)) {
     return this.props.reviews.map(review =><li key={review.id}>Name:{review.user_name} Content:{review.content}</li>)
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