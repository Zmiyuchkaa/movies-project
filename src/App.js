import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Login from "./components/forms/LoginForm"
import SignUp from "./components/forms/RegistrationForm"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/sign-up" component={SignUp} />
      </div>
    );
  }
}

export default App;
