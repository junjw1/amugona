import React, { Component } from 'react';
import chat_nav from './chat_nav';
import chat_msg from './chat_msg';

class chat_body extends Component {
  render() {
    return (
      <div className="chat_body">
        <chat_nav/>
        <chat_msg/>
      </div>
    );
  }
}

export default chat_body;