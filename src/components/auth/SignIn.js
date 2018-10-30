import React, { Component } from 'react'

class SignIn extends Component {

  render () {
    return (
      <div className="container">
        <form className="col s12">
          <h5 className="grey-text text-darken-3">Sign In</h5>
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

export default SignIn