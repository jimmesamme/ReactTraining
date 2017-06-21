import React, { Component } from 'react'
import UserList from './UserList'
import { withRouter } from 'react-router-dom'

class UserListContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.showUserProfile = this.showUserProfile.bind(this);
  }

  componentDidMount() {
    fetch('/data/users.js', {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ users: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  showUserProfile(user) {
    this.props.history.push(`/users/${user.username}`)
  }

  render() {
    return (
      <UserList
        users = {this.state.users}
        match = {this.props.match}
        showUserProfile = {this.showUserProfile}
      />
    )
  }
}

export default withRouter(UserListContainer)
