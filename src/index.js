import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <Provider>
     <Router>
      <App />
     </Router>,
    // </Provider>,
 document.getElementById('root'));
serviceWorker.unregister();
