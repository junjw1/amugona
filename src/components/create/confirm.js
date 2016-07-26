//create > 최종 확인
import React, { Component } from 'react';
import { Link } from 'react-router';

class confirm extends Component {
  render() {
    return (
      <div className="center">
        <h1 className="title">Check your input Data!</h1>
        <input type="email" placeholder="email" /><br/>
        <input type="text" placeholder="team name" /><br/>
        <input type="text" placeholder="team address" /><br/> .amugona.com<br/>
        <Link to="/chat/chat"><button>Go team chat page</button></Link>
      </div>
    );
  }
}

export default confirm;