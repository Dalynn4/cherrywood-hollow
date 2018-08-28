import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  display: 'inline-block',
  width: '23%',
  padding: '10px',
  margin: '10 10px 10px',
  'backgroundImage': 'url(http://racksaudiodesign.com/Racks_Audio_Design/profil_files/mahogany.jpg)',
  color: 'silver',
  'textAlign': 'center',
  'fontFamily': 'Playfair Display SC',
  'fontSize': '30px',
}


const Menu = () => {
  return (
    <div>
      <div className="Menu">
        <NavLink
        to="/"
        exact
        style={link}
        activestyle={{
          background: 'black'
        }}
        >Home</NavLink>
        <NavLink
        to="/about"
        exact
        style={link}
        activestyle={{
          background: 'black'
        }}
        >About</NavLink>
        <NavLink
        to="/trailer"
        exact
        style={link}
        activestyle={{
          background: 'black'
        }}
        >Trailer</NavLink>
        <NavLink
        to="/reviews"
        exact
        style={link}
        activestyle={{
          background: 'black'
        }}
        >Reviews</NavLink>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC');
      </style>
    </div>
  )
}

export default Menu