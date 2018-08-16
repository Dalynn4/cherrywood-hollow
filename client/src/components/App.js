import React from 'react'
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Trailer from './Trailer';
import ReviewsPage from './ReviewsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/App.css';


const App = () => {
  return (
    <div className="App">
    <Menu />
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/trailer" component={Trailer} />
     <Route exact path="/reviews" component={ReviewsPage} />
     </div>
  )
}

export default App