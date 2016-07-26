//create > 이름 입력
import React, { Component } from 'react';
import { Link } from 'react-router';

class name extends Component {
  render() {
    return (
      <div className="center">

        <h1 className="title">Whats your name?</h1>
        <input type="text" id="inputName" placeholder="name" />
        <Link to="/create/confirm"><button>Next</button></Link>

      </div>
    );
  }
}

export default name;
