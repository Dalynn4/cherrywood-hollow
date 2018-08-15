import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  width: '300px',
  padding: '25px',
  margin: '10 60px 60px',
  background: 'darkblue',
  color: 'red',
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
    </div>
  )
}

export default Menu