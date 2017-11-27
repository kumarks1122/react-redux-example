import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Flight.css';

import Filter from './Filter';
import FlightList from './FlightList';
import {
  FLIGHT_PAGE_LOADED,
  FLIGHT_PAGE_UNLOADED,
  FILTER_TRIP,
  INITIAL_TRIP_CHANGE,
  RETURN_TRIP_CHANGE
} from '../../helpers/actionTypes';
import agent from '../../agent';
import { readableNumber } from '../../helpers/functions';

const mapStateToProps = state => ({ ...state.flight });

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: FLIGHT_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: FLIGHT_PAGE_UNLOADED }),
  onFilter: (payload) =>
    dispatch({ type: FILTER_TRIP, payload }),
  onSelectInitialTrip: (payload) =>
    dispatch({ type: INITIAL_TRIP_CHANGE, payload }),
  onSelectReturnTrip: (payload) =>
    dispatch({ type: RETURN_TRIP_CHANGE, payload }),
});

class Flight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterVisible: false
    }
  }

  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Flights.all(),
      agent.Flights.airlines()
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  toggleFilter = () => {
    this.setState({ filterVisible: !this.state.filterVisible })
  }

  onFilterSubmit = () => {
    this.props.onFilter(Promise.all([
      agent.Flights.filter(this.props.departureAt, this.props.arrivalAt, this.props.airlines)
    ]));
  }

  renderCart = () => {
    return (
      <div className="cart">
        <div className="price">
          <h3 id="totalfare" className="totalfare">
            Rs. { readableNumber(this.props.initialTripSelected.fare + this.props.returnTripSelected.fare) }
          </h3>
          <span className="totalfare-int">
            { readableNumber(this.props.initialTripSelected.fare + this.props.returnTripSelected.fare) }
          </span>
          <span>includes all charges (<a id="fbup">fare breakup</a>)</span>
        </div>
        <div className="buy">
          <button onClick={this.bookTrip}>Book</button>
        </div>
      </div>
    )
  }

  bookTrip = () => {
    console.log("booking");
  }

  render() {
    return (
      <div className="content">
        <div className="Filter">
          <h1>
            <strong className="stop">New Delhi - Mumbai</strong>
            <span>Mon, 02 Aug - Sun, 08 Aug</span><span className="thin"> | 2 adults, 2 children</span>
            <a className="pillButton fRight filterToggleButton" onClick={this.toggleFilter}>Filter</a>
          </h1>
          {
            this.state.filterVisible && (
              <Filter
                onFilterSubmit={this.onFilterSubmit}
              />
            )
          }
        </div>
        <div id="display">
          {
            this.props.initialTripSelected.fare && this.props.returnTripSelected.fare && this.renderCart()
          }
          <div className="trip">
            <FlightList
              fromCity={"Mumbai"}
              toCity={"New-Delhi"}
              trips={this.props.trips.initial_flights}
              selectedTrip={this.props.initialTripSelected}
              onTripSelect={this.props.onSelectInitialTrip}
            />
            <FlightList
              fromCity={"New-delhi"}
              toCity={"Mumbai"}
              trips={this.props.trips.return_flights}
              selectedTrip={this.props.returnTripSelected}
              onTripSelect={this.props.onSelectReturnTrip}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight);