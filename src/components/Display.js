import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'

import Chat from './Chat';
import Login from './Login';
import io from 'socket.io-client';

import { updateUsername } from  '../stores/Display/actions';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component { 
  handleSubmit = (event) => {
    const { history, handleLoginSubmit } = this.props;
    const { username, outputLanguage } = event;

    if (!event.username || !event.outputLanguage) {
      return alert('Please fill in the all the fields.');
    }

    handleLoginSubmit(username, outputLanguage);
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
            <Chat />
          </Route>
        </Switch>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => (
  {
    handleLoginSubmit: (username, outputLanguage) => (
      dispatch(updateUsername(username, outputLanguage))
    )
  }
);

export default withRouter(connect(null, mapDispatchToProps)(Display));
