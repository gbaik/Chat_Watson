import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';

import Display from './components/Display';
import reducer from './stores/reducers'
import middleware from './stores/middleware';

const store = createStore(reducer, middleware);
const history = createHistory();

const App = () => (
  <Provider store = { store }>
    <Router history = { history }>  
      <Display history = { history }/>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
