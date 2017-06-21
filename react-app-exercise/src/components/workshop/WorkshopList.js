import React from 'react'

import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth from 'material-ui/utils/withWidth'
import { Route } from 'react-router-dom'

import View from '../layout/View'


const WorkshopList = (props) => (
	<View style={{ display: 'flex' }}>
    <View>
      { props.workshops.map(workshop => (
        <ListItem
          key={workshop.id} 
          style={{color: "black"}}
          primaryText={ `${workshop.title}`}
          leftIcon={<ActionGrade color={pinkA200}
          />}
        />
      ))}
    </View>
  </View>  
)

export default WorkshopList
