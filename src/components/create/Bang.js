import React, { Component } from 'react';

class Bang extends Component {
  render() {
    return(
      <div className="bangChat">
        <div className="row">
          <div className="col-md-2">
            <ul className="nav">
              <li>방이름</li>
              <li>
                칸막이
                <span className="glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#addKanmagi"></span>

                <div className="modal fade" id="addKanmagi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Create a kanmagi</h4>
                      </div>
                      <div className="modal-body">
                        <label className="control-label">Kanmagi Name</label>
                        <input className="form-control" id="inputKanmagiName"/>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button className="btn btn-primary" id="createKanmagi">Create kanmagi</button>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="kanmagi">
                  <li>
                    <a className="General">General</a>
                  </li>
                  <li>
                    <a className="Random">Random</a>
                  </li>
                </ul>
              </li>
              <li>유저</li>
            </ul>
          </div>
          <div className="col-md-10">
            <div className="header">
              <h1>칸막이이름<br/>
                <small>멤버수</small>
                <small>칸막이설명</small>
              </h1>
              <hr/>
            </div>

            <div className="content">
              <form id="chatPage">
                <div className="chatArea">
                  <ul id="messages"></ul>
                  <ul id="messages2"></ul>
                </div>
                <input type="text" id="inputMessage" placeHolder="type here..."/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bang;
