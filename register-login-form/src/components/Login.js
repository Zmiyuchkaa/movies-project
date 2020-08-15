import React, {Component} from "react";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);


    this.state = {
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
    console.log(this.state);
    this.setState({
      email: "",
      password: "",
    });
}

  render() {
    return (
      <div>
        <form onSubmit={this.displayLogin}>
          <h2>Login</h2>
          <div>
            <input
              type="text"
              placeholder="Username..."
              value={this.state.email}
              onChange={this.update}
              name="email"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.update}
              name="password"
              />
          </div>
          <input type="submit" value="Login" />
          <button>Cancel</button>
        </form>
        <Link to="/sign-up">Create an account</Link>
      </div>
    );
  }
}

export default Login;