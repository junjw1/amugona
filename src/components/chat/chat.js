import React, { Component } from 'react';
import Header from './header/header';
import Chat_body from './chat_body/chat_body';
import Footer from './footer/footer';

class chat extends Component {
  render() {
    return (
      <div className="chat">
        <Header />
        <Chat_body />
        <Footer />
      </div>
    );
  }
}

export default chat;
