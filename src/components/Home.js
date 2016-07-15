import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      /* home page */
      <div class="mainPage center">
        <h1>Hello World!</h1>
        <form id="mainPage">
          <input id="inputEmail" placeholder="email"/>
          <button>Create new Bang</button>
        </form>
      </div>
    );
  }
}

export default Home;
