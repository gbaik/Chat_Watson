import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Chat from './Chat';
import Login from './Login';
import io from 'socket.io-client';

const Display = ({ history }) => (
  <div>
    <Switch>                          
      <Route exact path = '/' >
        <Login history = { history }/>
      </Route>
      <Route path = '/general' >
        <Chat />
      </Route>
    </Switch>   
  </div>
)

export default Display;
