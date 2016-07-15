import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './Home';
import Create from './Create';
import Bang from './Bang';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="Home">Home</Link></li>
          <li><Link to="Create">Create</Link></li>
          <li><Link to="Bang">Bang</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
