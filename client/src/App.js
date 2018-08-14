import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    userName: "Name",
    content: "Review or Comment"
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

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cherrywood Hollow</h1>
        </header>
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
}

export default App;
