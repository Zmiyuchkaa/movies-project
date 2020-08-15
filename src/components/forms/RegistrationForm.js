import React, {Component} from "react";
import {Link} from "react-router-dom";


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
    };

    this.update = this.update.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You have successfully registered");
    console.log(this.state);
    this.setState({
      fullname: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.displayLogin}>
          <h2>Register</h2>
          <div class="ui focus input">
            <input
              type="text"
              placeholder="Full Name"
              value={this.state.fullname}
              onChange={this.update}
              name="fullname"
            />
          </div>
          <div class="ui focus input">
            <input
              type="text"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.update}
              name="email"
            />
          </div>
          <div class="ui focus input">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update}
              name="password"
            />
          </div>
          <div class="ui focus input">
            <input
              type="password"
              placeholder="Confirm password"
              name="password1"
            />
          </div>
          <input type="submit" value="Ok" />
          <button>Cancel</button>
        </form>
        <Link to="/">Login Here</Link>
      </div>
    )
  }
}

export default SignUp;