import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reviewsReducer from './reducers/reviewsReducer.js'

const store = createStore(reviewsReducer, applyMiddleware(thunk));


ReactDOM.render((
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>),
document.getElementById('root'));
registerServiceWorker();
