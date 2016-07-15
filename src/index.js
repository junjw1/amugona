import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import Create from './components/Create';
import Bang from './components/Bang';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

let container = document.getElementById('container');
ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} />
      <Route path = "home" component = {Home} />
      <Route path = "create" component = {Create} />
      <Route path = "bang" component = {Bang} />
    </Route>
  </Router>
, container);
