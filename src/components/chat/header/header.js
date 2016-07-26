import React, { Component } from 'react';
import teamname from './teamname';
import desc from './desc';

class header extends Component {
  render() {
    return (
      <div className="header">
        <teamname/>
        <desc/>
      </div>
    );
  }
}

export default header;