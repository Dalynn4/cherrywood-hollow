import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Trailer from './components/Trailer';
import ReviewsPage from './components/ReviewsPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
<Router>
  <React.Fragment>
    <Menu />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/trailer" component={Trailer} />
    <Route exact path="/reviews" component={ReviewsPage} />
  </React.Fragment>
</Router>),
document.getElementById('root'));
registerServiceWorker();
