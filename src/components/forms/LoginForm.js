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
        <div class="ui placeholder segment" style={{ height: '100vh' }}>
          <div class="ui stackable very relaxed two column grid">
            <div class="column">
              <form class="ui form"  onSubmit={this.displayLogin}>
                <div class="field">
                  <label>Username</label>
                  <div class="ui left icon input">
                    <input 
                      type="text" 
                      placeholder="Username..."
                      value={this.state.email}
                      onChange={this.update}
                      name="email"
                    />
                    <i aria-hidden="true" class="user icon"></i>
                  </div>
                </div>
                <div class="field">
                  <label>Password</label>
                  <div class="ui left icon input">
                    <input 
                      type="text"
                      placeholder="Password..."
                      value={this.state.password}
                      onChange={this.update}
                      name="password"
                    />
                    <i aria-hidden="true" class="lock icon"></i>
                  </div>
                </div>
                
                  <button class="ui primary button"  style={{width: "100px"}} type="submit" value="Login">Login</button>
                  <button class="ui grey button" style={{marginTop: "10px", width: "100px"}} >Cancel</button>
                  
                
              </form>
            </div>
            <div class="middle aligned column">
              <button class="ui big button">
                <i aria-hidden="true" class="signup icon"></i>
                <Link to="/sign-up">Sign Up</Link>
              </button>
            </div>
          </div>
          <div class="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
}

export default Login;