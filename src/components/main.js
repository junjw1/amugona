//메인 페이지 - 이메일 입력으로 시작
import React from 'react';
import { Link } from 'react-router';

class main extends React.Component {
  render() {
    return (
      <div className="center">
        <h1 className="title">Hello React!</h1>
        <input type="email" id="inputEmail" placeholder="email" />
        <Link to="/create"><button className="ghost-button">Create Team</button></Link>
      </div>
    );
  }
}

export default main;
