//create > 팀 이름과 팀 주소 입력
import React, { Component } from 'react';
import { Link } from 'react-router';

class teamname extends Component {
  render() {
    return (
      <div className="center">
        <h1 className="title">Setting your Bang</h1>
        <input type="text" id="inputTeamName" placeholder="team name" /><br/>
        <input type="text" id="inputTeamAddr" placeholder="team address" /><br/> .amugona.com<br/>
        <Link to="/create/name"><button>Next</button></Link>
      </div>
    );
  }
}

export default teamname;
