import React, { Component } from 'react'
import UserList from './UserList'
import { withRouter } from 'react-router-dom'

import UserProfile from './UserProfile.js'

class UserProfileContainer extends Component {
	constructor() {
		super();
		this.state = { username: null }
	}

	componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({user : data})
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      <UserProfile
        user={this.state.username}
        username={this.props.match.params.username}
      />
    )
  }
}

export default UserProfileContainer