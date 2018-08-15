import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Menu from './components/Menu';
import Trailer from './components/Trailer';
import ReviewsPage from './components/ReviewsPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
<Router>
  <React.Fragment>
    <Menu />
    <Route exact path="/" component={App} />
    <Route exact path="/trailer" component={Trailer} />
    <Route exact path="/reviews" component={ReviewsPage} />
  </React.Fragment>
</Router>),
document.getElementById('root'));
registerServiceWorker();
