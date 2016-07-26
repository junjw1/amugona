//최상위 컴포넌트
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import main from './components/main';
import create from './components/create/teamname';
import chat from './components/chat/chat';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

let container = document.getElementById('container');
ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {main} />
      <Route path = "main" component = {main} />
      <Route path = "create/teamname" component = {create} />
      <Route path = "chat/chat" component = {chat} />
    </Route>
  </Router>
, container);