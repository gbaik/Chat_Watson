import React, { Component } from 'react';
import io from 'socket.io-client';
import MessageForm from './MessageForm';
import { connect } from 'react-redux';

import { displayNewMessage } from '../stores/Display/actions';

const socket = io();

class Chat extends Component {
  componentDidMount() {
    socket.on('displayMessage', message => {
      this.props.handleUpdateMessages(message);      
    });
  }

  handleSubmit = (event) => {
    if (!event.text) {
      return alert('Please enter a message.');
    }

    let message = {
      username: this.props.username,
      text: event.text
    }

    socket.emit('sendMessage', message);
  }

  render() {
    return (
      <div>
        {this.props.messages.map((message, index) => (
          <p key = { index }>{ message.username }: { message.text }</p>              
        ))}
        <MessageForm socket = { socket } onSubmit = { this.handleSubmit }/>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  username: state.Display.username,
  messages: state.Display.messages
});

const mapDispatchToProps = (dispatch) => (
  {
    handleUpdateMessages: (message) => (
      dispatch(displayNewMessage(message))
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);