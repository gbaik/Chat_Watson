import React, { Component } from 'react';

import io from 'socket.io-client';

class Login extends Component {
  render() {
    const { username, roomname, handleOnChange, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit = { handleSubmit }>
          Name: <input type = 'text' name = 'username' value = { username } onChange = { handleOnChange }/>
          Language: 
          <select>
            <option>English</option>
          </select>
          Join Room (Optional): <input type = 'text' name = 'roomname' value = { roomname } onChange = { handleOnChange }/>
          <input type = 'submit' value = 'Enter'/>
        </form>
      </div>
    );
  };
}

export default Login;