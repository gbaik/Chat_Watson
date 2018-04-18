import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './components/Chat';
import Login from './components/Login';
import io from 'socket.io-client';

const App = () => (
  <div>
    <Chat />
    {/* <Login /> */}
  </div>
)

export default App;
