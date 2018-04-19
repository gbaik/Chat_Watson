// import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Chat from './Chat';
import Login from './Login';
import io from 'socket.io-client';

// const Display = ({ history }) => (
//   <div>
//     <Switch>                          
//       <Route exact path = '/' >
//         <Login history = { history }/>
//       </Route>
//       <Route path = '/general' >
//         <Chat />
//       </Route>
//     </Switch>   
//   </div>
// )

import React, { Component } from 'react';

class Display extends Component { 
  state = {
    username: '',
    roomname: ''
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (!this.state.roomname) {
      this.setState({
        roomname: 'random'
      })
    }

    if (!this.state.username) {
      alert('Please add a username.');
    } else {
      this.props.history.push(`/general`);
    }

    // io.emit('add user', this.state.username);
  }

  render() {
    return (
      <div>
        <Switch>                          
          <Route exact path = '/' >
            <Login history = { history } handleOnChange = { this.handleOnChange } handleSubmit = { this.handleSubmit }/>
          </Route>
          <Route path = '/general' >
            <Chat username = { this.state.username } />
          </Route>
        </Switch>
      </div>
    );
  };
}


export default Display;
