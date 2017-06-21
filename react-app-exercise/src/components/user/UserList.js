import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth from 'material-ui/utils/withWidth'
import { Route } from 'react-router-dom'

import View from '../layout/View'
import UserProfile from './UserProfile'

class UserList extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
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
    const { match, width } = this.props
    
    return (
      <View style={{ display: 'flex' }}>
        <View>
          { this.state.users.map(user => (
            <ListItem
              onClick={this.showUserProfile.bind(this, user)} key={user.username} style={{color: "black"}}
              primaryText={ `${user.name.first} ${user.name.last}`}
              leftIcon={<ActionGrade color={pinkA200} />}
              rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
            />
          ))}
        </View>
        <Route path={`${match.url}/:username`} component={UserProfile} />
      </View>
    )
  }
}

export default withWidth()(UserList)

UserList.contextTypes = {
  router: PropTypes.object.isRequired
}
