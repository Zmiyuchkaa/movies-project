import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


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
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Register
              </Header>
              <Form size='large' onSubmit={this.displayLogin}>
                <Segment stacked>
                  <Form.Input 
                    fluid icon='user' 
                    iconPosition='left'  
                    type="text"
                    placeholder="Full Name"
                    value={this.state.fullname}
                    onChange={this.update}
                    name="fullname"
                  />
                  <Form.Input
                    fluid icon='envelope'
                    iconPosition='left'
                    type="text"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.update}
                    name="email"
                  />
                  <Form.Input
                    fluid icon='lock'
                    iconPosition='left'
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update}
                    name="password"
                  />
                  <Form.Input
                    fluid icon='lock'
                    iconPosition='left'
                    type="password"
                    placeholder="Confirm password"
                    name="password1"
                  />
                  <Button color='teal' fluid size='medium' type="submit" value="Ok">
                    Ok
                  </Button>
                  <Button color='grey' fluid size='medium' style={{marginTop: "20px"}}>
                    Cancel
                  </Button>
                </Segment>
              </Form>
              <Message>
                <Link to="/">Login Here</Link>
              </Message>
            </Grid.Column>
          </Grid>
      </div>
    )
  }
}

export default SignUp;