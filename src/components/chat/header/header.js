import React, { Component } from 'react';
import Teamname from './teamname';
import Desc from './desc';

class header extends Component {
  render() {
    return (
      <div>
        <Teamname />
        <Desc />
      </div>
    );
  }
}

export default header;
