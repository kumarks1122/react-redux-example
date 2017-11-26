import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';

class FlightList extends Component {
  render() {
  	return (
	  	<div className="trips">
	      <h4 className="rP">{this.props.fromCity} - {this.props.toCity}</h4>
	      <div className="sorts">
	        <a href="#" className="sort-trip2" >
	          departs
	        </a>
	        <a href="#" className="sort-trip2 middle" >
	          arrives
	        </a>
	        <a href="#" className="sort-trip2 last selected" >
	          price
	        </a>
	      </div>
	      <ul className="flights" id="trip1-list">
	      	{
	      		this.props.trips.map((trip) => {
	      			(
				        <li className="selected">
				          <div className="flight-icons air">
				          </div>
				          <div className="flight-details">
				            <div className="time">{trip.departure_at} - {trip.arrival_at}</div>
				            <div className="name">{trip.carrier_name} {trip.flight_no}</div>
				            <div className="duration">{trip.duration}</div>
				          </div>
				          <div className="trip-fare">Rs. {trip.cost}</div>
				          <div className="fare">3953</div>
				          <div className="departs">1314924180000</div>
				          <div className="arrives">1314930780000</div>
				          <div className="cb"><span className="cbid">2</span></div>
				        </li>
	      			)
	      		})
	      	}
	      </ul>
	    </div>
  	);
  }
}

FlightList.defaultProps = {
	trips: [],
};

FlightList.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object),
  fromCity: PropTypes.string.isRequired,
  toCity: PropTypes.string.isRequired,
};

export default FlightList;