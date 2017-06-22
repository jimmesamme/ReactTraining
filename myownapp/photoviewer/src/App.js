import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import PhotoListContainer from './components/PhotoListContainer.js'
import PhotoViewContainer from './components/PhotoViewContainer.js'

class App extends Component {
  render() {
    return (
      <div className="main-view">
        <Switch>
          <Route exact path="/photos" component={PhotoListContainer} />
          <Route path="/photos/:id" component={PhotoViewContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
