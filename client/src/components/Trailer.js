import React from 'react'
import '../css/Trailer.css'

const Trailer = () => {
  return(
    <div className="trailer">
      <style>
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC');
      </style>
      <h1 className="title">Trailer</h1>
    <iframe  title="Welcome to Cherrywood Hollow" width="560" height="315"  src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  )
}

export default Trailer