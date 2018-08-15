import React, { Component } from 'react'
import { connect } from 'react-redux'

class Reviews extends Component {

  //state = {
  // userName: "Name",
  //content: "Review or Comment",
  //  reviews: []
  //}

 // componentDidMount() {
 //   fetch('http://localhost:3001/reviews')
 //   .then(response => response.json())
 //  .then(data => {
  //    this.setState ({
  //      reviews: data
  //    })
  //  })
  //}

  render() {
    return (
      <ol>
      {this.props.reviews.map(review =><li key={review.id}>Name:{review.user_name} Content:{review.content}</li>)}
      </ol>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)