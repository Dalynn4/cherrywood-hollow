import React, { Component } from 'react';
import '../css/Home.css';


class Home extends Component {

  render() {
    return (
      <div className="Home">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC');
        </style>
        <h1 className="title">Cherrywood Hollow</h1>
        <h4 className="body">Experience the Party Game Phenomenom, Now on Your Phone!</h4>
          <ol className="hooks">
            <li>Play the game like never before!</li>
            <li>Support for up to 20 players per game!</li>
            <li>Save your settings for less downtime in a run of games!</li>
          </ol>
      </div>
    );
  }
}

export default Home;
