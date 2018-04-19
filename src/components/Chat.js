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
    if (!event.message) {
      return alert('Please enter a message.');
    } 
   
    socket.emit('sendMessage', event.message);
  }

  render() {
    return (
      <div>
        {this.props.messages.map((message, index) => (
          <p key = { index }>{ this.props.username }: { message }</p>
        ))}
        <MessageForm socket = { socket } onSubmit = { this.handleSubmit }/>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
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