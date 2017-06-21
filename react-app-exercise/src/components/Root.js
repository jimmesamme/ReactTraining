import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { Route, Switch } from 'react-router-dom'

import LoginContainer from './LoginContainer'

import App from './App'
import theme from '../config/Theme'

const muiTheme = getMuiTheme(theme)

const Root = () => (
  <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
    	<Switch>
    		<Route path="/login" component={LoginContainer} />
    		<Route component={App} />
    	</Switch>
    </MuiThemeProvider>
  </Router>
)

export default Root
