import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'



const Login = (props) => (
  <form className="form-signin">
    <FormGroup>
      <h2 className="form-signin-heading">Please sign in</h2>
    </FormGroup>

    <FormGroup>
      <FormControl className="form-control" id="email" type="email" value={props.email} placeholder="Enter email" onChange={props.onEmailChange} />
      <FormControl className="form-control" id="password" type="password" value={props.password} placeholder="Password" onChange={props.onPasswordChange} />
    </FormGroup>

    <Button bsSize="large" bsStyle="primary" block type="submit" onClick={props.validate}>Sign in</Button>
  </form>
)


export default Login
