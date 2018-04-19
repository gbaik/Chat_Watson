// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'

import Chat from './Chat';
import Login from './Login';
import io from 'socket.io-client';

import { updateUsername } from  '../stores/Display/actions';

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
import { connect } from 'react-redux';

class Display extends Component { 
  state = {
    username: '',
    roomname: ''
  };

  handleSubmit = (event) => {
    const { history, handleLoginSubmit } = this.props;

    if (!event.username) {
      return alert('Please add a username.');
    }
    
    handleLoginSubmit(event.username)
    history.push('/general'); 
    // io.emit('add user', this.state.username);
  }

  render() {
    return (
      <div>
        <Switch>                          
          <Route exact path = '/' >
            <Login history = { history } onSubmit = { this.handleSubmit } />
          </Route>
          <Route path = '/general' >
            <Chat username = { this.state.username } />
          </Route>
        </Switch>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => (
  {
    handleLoginSubmit: (username) => (
      dispatch(updateUsername(username))
    )
  }
)

export default withRouter(connect(null, mapDispatchToProps)(Display));
