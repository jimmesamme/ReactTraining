import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Login from './Login.js'

class LoginContainer extends Component {
	constructor() {
		super()
	  this.state = {
	    email: "",
	    password: ""
	  }
	  this.onEmailChange = this.onFieldValueChange.bind(this, 'email');
	  this.onPasswordChange = this.onFieldValueChange.bind(this, 'password');
	  this.validate = this.validate.bind(this);
	}

	onFieldValueChange(fieldName, event) {
		this.setState({
			[fieldName]: event.target.value
		});
	}

  validate(event) {
    if(this.state.password === "1234" && this.state.username === "react@fan.com") { 
      this.props.history.push("/")
    }
  }

  render() {
  	return (
  		<Login
  			onEmailChange={this.onEmailChange}
  			onPasswordChange={this.onPasswordChange}
  			email={this.state.email}
  			password={this.state.password}
  			validate={this.validate}
  		/>
  	)
  }

}

export default withRouter(LoginContainer)