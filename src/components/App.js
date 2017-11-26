import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Flight from '../components/Flight';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
              <img src="/images/cleartrip_logo.gif" alt="cleartrip" height="25px" />
          </div>
          <ul>
            <li>
              <Link to="/" className="flight selected"></Link>
            </li>
            <li>
              <Link to="/" className="suitcase"></Link>
            </li>
            <li>
              <Link to="/" className="settings"></Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Flight}/>
        </Switch>
      </div>
    );
  }
}

export default App;
