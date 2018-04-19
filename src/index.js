import createHistory from 'history/createBrowserHistory';
import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';

import Display from './components/Display';

// import { createStore } from "redux"
// import { Provider } from "react-redux"

// import reducer from "./store/reducers"
// import middleware from "./store/middleware";

// const store = createStore(reducer, middleware);
const history = createHistory();

const App = () => (
  <Router history = { history }>  
    <Display history = { history }/>
  </Router>    
);

ReactDOM.render(<App />, document.getElementById("root"));
