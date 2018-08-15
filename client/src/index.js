import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Menu from './components/Menu'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
<Router>
  <Route path="/" component={App} />
</Router>),
document.getElementById('root'));
registerServiceWorker();
