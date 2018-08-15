import React, { Component } from 'react'

class ReviewForm extends Component {

  state = {
    userName: "Name",
    content: "Review or Comment",
    reviews: []
  }

  handleUserNameChange = (event) => { 
    this.setState({
      userName: event.target.value
    })
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  submitReview = (e)  => {
    e.preventDefault();
    fetch('http://localhost:3001/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    fetch('http://localhost:3001/reviews')
    .then(response => response.json())
    .then(data => {
      this.setState ({
        reviews: data
      })
    })
  }

  render() {
    return (
      <div>
           <h2 className="App-intro">Review Form</h2>
          <form onSubmit={this.submitReview}>
            <p>Name:</p>
              <input onChange={this.handleUserNameChange} value={this.state.userName} />
            <p>Review or Comment:</p>
              <input onChange={this.handleContentChange} value={this.state.content} />
            <input  type="submit" />
            </form>
      </div>
    )
  }
}

export default ReviewForm