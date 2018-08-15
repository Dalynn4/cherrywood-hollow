import React, { Component } from 'react';
import './App.css';

class App extends Component {

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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cherrywood Hollow</h1>
        </header>
        <ol>
          {this.state.reviews.map(review =><li key={review.id}>Name:{review.user_name} Content:{review.content}</li>)}
          </ol>
        <h2 className="App-intro">Review Form</h2>
          <form onSubmit={this.submitReview}>
            <p>Name:</p>
              <input onChange={this.handleUserNameChange} value={this.state.userName} />
            <p>Review or Comment:</p>
              <input onChange={this.handleContentChange} value={this.state.content} />
            <input  type="submit" />
            </form>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3001/reviews')
    .then(response => response.json())
    .then(data => {
      this.setState ({
        reviews: data
      })
    })
  }
  
}

export default App;
