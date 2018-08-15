import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Trailer from './components/Trailer';
import ReviewsPage from './components/ReviewsPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reviewsReducer from './reducers/reviewsReducer.js'

const store = createStore(reviewsReducer, applyMiddleware(thunk));


ReactDOM.render((
<Provider store={store}>
  <Router>
   <React.Fragment>
      <Menu />
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/trailer" component={Trailer} />
     <Route exact path="/reviews" component={ReviewsPage} />
    </React.Fragment>
  </Router>
</Provider>),
document.getElementById('root'));
registerServiceWorker();
