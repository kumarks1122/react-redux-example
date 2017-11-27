import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { readableTime, readableNumber } from '../../helpers/functions';

class FlightList extends Component {
	constructor(props) {
    super(props);

    this.state = {
      trips: props.trips,
      sortBy: "fare"
    }
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({ trips: nextProps.trips }, function() {
	  	this.handleSort('fare');
  	})
  }

  handleSort = (sortBy) => {
  	let { trips } = this.state;
  	trips.sort(function(a, b) {
		  return a[sortBy] - b[sortBy];
		});
		this.setState({ sortBy });
		this.setState({ trips });
  }

  render() {
  	return (
	  	<div className="trips">
	      <h4 className="rP">{this.props.fromCity} - {this.props.toCity}</h4>
	      <div className="sorts">
	        <a 
	        	className={`sort-trip2 ${this.state.sortBy === 'departs' ? "selected" : ""}`}
	        	onClick={() => this.handleSort('departs')}
	        >
	          Departs
	        </a>
	        <a 
	        	className={`sort-trip2 middle ${this.state.sortBy === 'arrives' ? "selected" : ""}`}
	        	onClick={() => this.handleSort('arrives')}
	        >
	          Arrives
	        </a>
	        <a 
	        	className={`sort-trip2 last ${this.state.sortBy === 'fare' ? "selected" : ""}`}
	        	onClick={() => this.handleSort('fare')}
	        >
	          Price
	        </a>
	      </div>
	      <ul className="flights" id="trip1-list">
	      	{
	      		this.state.trips.map((trip) => {
	      			return (
				        <li className={this.props.selectedTrip.id === trip.id ? "selected": ""} onClick={() => this.props.onTripSelect(trip)}>
				          <div className={`flight-icons ${trip.carrier_name}`}>
				          </div>
				          <div className="flight-details">
				            <div className="time">{readableTime(trip.departs)} - {readableTime(trip.arrives)}</div>
				            <div className="name">{trip.carrier_name} {trip.flight_no}</div>
				            <div className="duration">{trip.duration}</div>
				          </div>
				          <div className="trip-fare">Rs. {readableNumber(trip.fare)}</div>
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