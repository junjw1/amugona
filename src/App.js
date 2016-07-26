//최상위 컴포넌트
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// Main
import Main from './components/main';

// Create
import Teamname from './components/create/teamname';
import Name from './components/create/name';
import Confirm from './components/create/confirm';

// Chat
import Chat from './components/chat/chat';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

let container = document.getElementById('container');
ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App} >
      <IndexRoute component = {Main} />
      <Route path = "create" component = {Teamname} />
      <Route path = "create/name" component = {Name} />
      <Route path = "create/confirm" component = {Confirm} />
      <Route path = "chat" component = {Chat} />
    </Route>
  </Router>
), container);
