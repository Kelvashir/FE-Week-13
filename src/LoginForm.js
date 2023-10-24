import React from "react";

//Login Form class
export default class LoginForm extends React.Component {
  render() {
    return (
      <section>
        <br />
        <h3 class="text-center p-1">Log In</h3>
        <form className="inputForm">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="textHelp"
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Log in
          </button>
        </form>
      </section>
    );
  }
}
