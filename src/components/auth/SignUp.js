import React, { Component } from 'react'

class SignUp extends Component {

  render() {
    return (
      <div className="container">
        <form className="col s12">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp