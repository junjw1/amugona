import React, { Component } from 'react';
import header from '.header/header';
import chat_body from '.chat_body/chat_body';
import footer from '.footer/footer';

class chat extends Component {
  render() {
    return (
      <div className="chat">
        <header/>
        <chat_body/>
        <footer/>
      </div>
    );
  }
}

export default chat;