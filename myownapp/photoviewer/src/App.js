import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import PhotoListContainer from './components/PhotoListContainer.js'

class App extends Component {
  render() {
    return (
      <div className="main-view">
        <PhotoListContainer />
      </div>
    );
  }
}

export default App;
