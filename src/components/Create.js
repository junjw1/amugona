import React, { Component } from 'react';

class Create extends Component {
  render() {
    return(
      /* Create Page */
      <div className="createPage">
        <div className="bangPage">
          <form id="bangPage" className="form-signin">
            <h1>Edit your Bang Name</h1>
            <input className="form-control" id="inputBangName" type="text" placeholder="BangName"/>
            <input className="form-control" id="inputBangAddr" type="text" placeholder="BangAddress" placeHolder="BangAddress"/>
            <label>.amugona.com</label>
            <button>Next</button>
          </form>
        </div>

        <div className="namePage">
          <form id="namePage" className="form-signin">
            <h1>Edit your name</h1>
            <p>
                your name
                <input className="form-control" id="inputUsername" type="text" placeholder="name"/>
            </p>
            <button>Next</button>
          </form>
        </div>

        <div className="detailPage">
          <form id="detailPage" className="form-signin">
            <h1>Profile Detail</h1>
            <p>Bang Name</p>
            <input className="form-control" id="editBangName" placeholder="bang name"/>
            <p>Bang Address</p>
            <input className="form-control" id="editBangAddr" placeholder="bang address"/>
            <p>Name</p>
            <input className="form-control" id="editUsername" placeholder="name"/>
            <p>Email</p>
            <input className="form-control" id="editEmail" placeholder="email"/>
            <button>Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
