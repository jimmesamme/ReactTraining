import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth from 'material-ui/utils/withWidth'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import View from '../layout/View'
import UserProfile from './UserProfile'

const UserList = (props) => (
  <View style={{ display: 'flex' }}>
    <View>
      { props.users.map(user => (
        <ListItem
          onClick={props.showUserProfile.bind(this, user)} key={user.username} style={{color: "black"}}
          primaryText={ `${user.name.first} ${user.name.last}`}
          leftIcon={<ActionGrade color={pinkA200} />}
          rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
        />
      ))}
    </View>
    <Route path={`${props.match.url}/:username`} component={UserProfile} />
  </View>
)


export default withWidth()(UserList)
