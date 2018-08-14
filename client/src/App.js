import React, { Component } from 'react';
import './App.css';

class App extends Component {



  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Cherrywood Hollow</h1>
        </header>
        <h2 className="App-intro">
          Review Form
          <form>
            <p>Name:</p>
            <input value="user_name" />
            <p>Review or Comment:</p>
            <input value="content" />
            <input onClick={this.submitReview} type="submit" />
            </form>
        </h2>
      </div>
    );
  }
}

export default App;
