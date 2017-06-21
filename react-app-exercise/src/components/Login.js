import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.validate = this.validate.bind(this)
  }

  onEmailChange(event) {
      this.setState({ email: event.target.value })
  }
  onPasswordChange(event) {
      this.setState({ password: event.target.value })
  }
  validate(event) {
    if(this.state.password === "1234" || this.state.username === "react@fan.com") { 
      this.props.history.push("/")
    }
  }

  render () {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl className="form-control" id="email" type="email" value={this.state.email} placeholder="Enter email" onChange={this.onEmailChange} />
          <FormControl className="form-control" id="password" type="password" value={this.state.password} placeholder="Password" onChange={this.onPasswordChange}/>
        </FormGroup>

        <Button bsSize="large" bsStyle="primary" block type="submit" onClick={this.validate}>Sign in</Button>
      </form>
    )
  }
}

export default withRouter(Login)
