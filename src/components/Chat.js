import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageForm from './MessageForm';

const socket = io();

class Chat extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    socket.on('displayMessage', message => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, index) => (
          <p key = { index }>{ message }</p>
        ))}
        <MessageForm socket = { socket }/>
      </div>
    );
  };
}

export default Chat;