import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

// import { store } from '../store';

import Header from './Header';
import Flight from './Flight';
import Trips from './Trips';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Flight}/>
          <Route path="/my-trips" component={Trips}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </div>
    );
  }
}

export default App;
