import React from 'react'
import '../css/About.css';

const About = () => {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC');
      </style>
      <h1 className="title">Story</h1>
        <p className="about">In the deepest of forests, in a place whose name was lost to time, lies the quiet hamlet of Cherrywood Hollow. You have lived here your whole live. Mostly, everything stays quiet, but as always, things are not what they seem. In <i>Cherrywood Hollow,</i> you must work together with your fellow villagers to slay a band of werewolves that have inhabited your town, before they consume the entirety of the population.</p>
      <h1 className="title">Gameplay</h1>
        <p className="about"> The game of <i>Cherrywood Hollow</i> starts with a group of players. Players will pick a "Game Master" who will run the game(preferably someone familiar with the role). The players are then assigned roles; either they will help protect the village, or they will become the werewolves. Gameplay consists of day/night cycles. The game starts at night. This is where the players execute their actions, and most players will have a role to play(depending on the number of players in your game). When day comes, the results of the players actions are made apperant by the Game Master, then the village holds a vote to see if they can determine the culprit. The culprit is then executed and play moves to night. The cycle continues until all werewolves have been elimnated or there are no non-werewolf villagers left. The game does have alternate win conditions, which can be explored through the app.</p>
    </div>
  )
}

export default About