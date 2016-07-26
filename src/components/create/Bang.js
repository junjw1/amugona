import React, { Component } from 'react';

class Bang extends Component {
  render() {
    return(
      <div class="bangChat">
        <div class="row">
          <div class="col-md-2">
            <ul class="nav">
              <li>방이름</li>
              <li>
                칸막이
                <span class="glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#addKanmagi"></span>

                <div class="modal fade" id="addKanmagi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Create a kanmagi</h4>
                      </div>
                      <div class="modal-body">
                        <label class="control-label">Kanmagi Name</label>
                        <input class="form-control" id="inputKanmagiName"/>
                      </div>
                      <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button class="btn btn-primary" id="createKanmagi">Create kanmagi</button>
                      </div>
                    </div>
                  </div>
                </div>

                <ul class="kanmagi">
                  <li>
                    <a class="General">General</a>
                  </li>
                  <li>
                    <a class="Random">Random</a>
                  </li>
                </ul>
              </li>
              <li>유저</li>
            </ul>
          </div>
          <div class="col-md-10">
            <div class="header">
              <h1>칸막이이름<br/>
                <small>멤버수</small>
                <small>칸막이설명</small>
              </h1>
              <hr/>
            </div>

            <div class="content">
              <form id="chatPage">
                <div class="chatArea">
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
