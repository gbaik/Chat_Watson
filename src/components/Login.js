import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import io from 'socket.io-client';

class Login extends Component {
  state = {
    username: ''
  };

  handleOnChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // io.emit('add user', this.state.username);
  }

  render() {
    return (
      <div>
        <h3>What's your name?</h3>
        <form onSubmit = { this.handleSubmit }>
          <input type = 'text' value = { this.state.username } onChange = { this.handleOnChange }/>
          <input type = 'submit'/>
        </form>
      </div>
    );
  };
}

export default Login;