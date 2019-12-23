import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="message-top"><p className="username">{this.props.author}</p><span className="timestamp">{this.props.time}</span></div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Message;
