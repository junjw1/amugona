import React, { Component } from 'react';

class Create extends Component {
  render() {
    return(
      /* Create Page */
      <div class="createPage">
        <div class="bangPage">
          <form id="bangPage" class="form-signin">
            <h1>Edit your Bang Name</h1>
            <input class="form-control" id="inputBangName" type="text" placeholder="BangName"/>
            <input class="form-control" id="inputBangAddr" type="text" placeholder="BangAddress" placeHolder="BangAddress"/>
            <label>.amugona.com</label>
            <button>Next</button>
          </form>
        </div>

        <div class="namePage">
          <form id="namePage" class="form-signin">
            <h1>Edit your name</h1>
            <p>
                your name
                <input class="form-control" id="inputUsername" type="text" placeholder="name"/>
            </p>
            <button>Next</button>
          </form>
        </div>

        <div class="detailPage">
          <form id="detailPage" class="form-signin">
            <h1>Profile Detail</h1>
            <p>Bang Name</p>
            <input class="form-control" id="editBangName" placeholder="bang name"/>
            <p>Bang Address</p>
            <input class="form-control" id="editBangAddr" placeholder="bang address"/>
            <p>Name</p>
            <input class="form-control" id="editUsername" placeholder="name"/>
            <p>Email</p>
            <input class="form-control" id="editEmail" placeholder="email"/>
            <button>Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
