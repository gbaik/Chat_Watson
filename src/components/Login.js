import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

    console.log(this.state);
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
          Room (Optional): <input type = 'text' name = 'roomname' value = { this.state.roomname } onChange = { this.handleOnChange }/>
          <input type = 'submit'/>
        </form>
      </div>
    );
  };
}

export default Login;