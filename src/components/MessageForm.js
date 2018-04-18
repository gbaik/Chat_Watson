import React, { Component } from 'react';
class MessageForm extends Component { 
  state = {
    message: ''
  };

  handleOnChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.socket.emit('sendMessage', this.state.message);
  }

  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit }>
          <input type = 'text' value = { this.state.message } onChange = { this.handleOnChange }/>
          <input type = 'submit'/>
        </form>
      </div>
    );
  };
}

export default MessageForm;