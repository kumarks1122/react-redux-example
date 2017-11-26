import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './Flight.css';

import Filter from './Filter';
import FlightList from './FlightList';

class Flight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterVisible: false
    }
  }

  toggleFilter = () => {
    this.setState({ filterVisible: !this.state.filterVisible })
  }

  render() {
    return (
      <div className="content">
        <div className="Filter">
          <h1>
            <strong className="stop">New Delhi - Mumbai</strong>
            <span>Mon, 02 Aug - Sun, 08 Aug</span><span className="thin"> | 2 adults, 2 children</span>
            <a className="pillButton fRight" onClick={this.toggleFilter}>Filter</a>
          </h1>
          {
            this.state.filterVisible && (<Filter />)
          }
        </div>
        <div id="display">
          <div className="cart">
            <div className="price">
              <h3 id="totalfare" className="totalfare">Rs. 6,772</h3>
              <span className="totalfare-int">6772</span>
              <span>includes all charges (<a id="fbup">fare breakup</a>)</span>
            </div>
            <div className="buy">
              <button>Book</button>
            </div>
          </div>
          <div className="trip">
            <FlightList
              fromCity={"Mumbai"}
              toCity={"New-Delhi"}
              trips={[]}
            />
            <FlightList
              fromCity={"New-delhi"}
              toCity={"Mumbai"}
              trips={[]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Flight;
