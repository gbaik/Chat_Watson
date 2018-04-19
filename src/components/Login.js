import React, { Component } from 'react';

import io from 'socket.io-client';

class Login extends Component {
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

    this.props.history.push(`/general`)
    // io.emit('add user', this.state.username);
  }

  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit }>
          Name: <input type = 'text' name = 'username' value = { this.state.username } onChange = { this.handleOnChange }/>
          Language: 
          <select>
            <option>English</option>
          </select>
          Join Room (Optional): <input type = 'text' name = 'roomname' value = { this.state.roomname } onChange = { this.handleOnChange }/>
          <input type = 'submit' value = 'Enter'/>
        </form>
      </div>
    );
  };
}

export default Login;