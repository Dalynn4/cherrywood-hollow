import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newReview } from '../actions/newReview'

class ReviewForm extends Component {

  state = {
    user_name: "Name",
    content: "Review or Comment",
  }

  handleUserNameChange = (event) => { 
    this.setState({
      user_name: event.target.value
    })
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  submitReview = (e)  => {
    e.preventDefault();
    const review = this.state
    this.props.newReview(review)
  }

  render() {
    return (
      <div>
           <h2 className="App-intro">Review Form</h2>
          <form onSubmit={this.submitReview}>
            <p>Name:</p>
              <input onChange={this.handleUserNameChange} value={this.state.user_name} />
            <p>Review or Comment:</p>
              <input onChange={this.handleContentChange} value={this.state.content} />
            <input  type="submit" />
            </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newReview: review => dispatch(newReview(review))
  }
}

export default connect(null, mapDispatchToProps)(ReviewForm)