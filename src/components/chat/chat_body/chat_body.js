import React, { Component } from 'react';
import Chat_nav from './chat_nav';
import Chat_msg from './chat_msg';

class chat_body extends Component {
  render() {
    return (
      <div className="chat_body">
        <Chat_nav/>
        <Chat_msg/>
      </div>
    );
  }
}

export default chat_body;
