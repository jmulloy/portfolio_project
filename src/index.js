import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
     <Router>
      <App />
     </Router>
    </Provider>,
 document.getElementById('root'));
serviceWorker.unregister();
