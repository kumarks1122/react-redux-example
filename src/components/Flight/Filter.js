import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectBox from '../subcomponents/SelectBox';
import {
  UPDATE_FIELD_FILTER
} from '../../helpers/actionTypes';

const mapStateToProps = state => ({ ...state.flight });

const mapDispatchToProps = dispatch => ({
  onDepartureAtChange: value =>
    dispatch({ type: UPDATE_FIELD_FILTER, key: 'departureAt', value }),
  onArrivalAtChange: value =>
    dispatch({ type: UPDATE_FIELD_FILTER, key: 'arrivalAt', value }),
  onAirlinesChange: value =>
    dispatch({ type: UPDATE_FIELD_FILTER, key: 'selectedAirlines', value }),
});

class Filter extends Component {
  constructor(props) {
    super(props);

    const timings = [
      { value: 0, name: "Anytime", time: { from: "00:00:00", to: "23:59:59" } },
      { value: 1, name: "Early (Before 8am)", time: { from: "00:00:00", to: "07:59:59" } },
      { value: 2, name: "Morning (8am - 12pm)", time: { from: "08:00:00", to: "11:59:59" } },
      { value: 3, name: "Afternoon (12pm - 4pm)", time: { from: "12:00:00", to: "15:59:59" } },
      { value: 4, name: "Evening (4pm - 8pm)", time: { from: "16:00:00", to: "19:59:59" } },
      { value: 5, name: "Night (After 8pm)", time: { from: "20:00:00", to: "23:59:59" } },
    ]

    this.state = {
      timings: timings
    }

    this.handleDepartureAtChange = ev => this.props.onDepartureAtChange(ev.target.value);
    this.handleArrivalAtChange = ev => this.props.onArrivalAtChange(ev.target.value);
  }

  handleAirlineChange = (ev) => {
    const value = ev.target.value;
    const airlines = new Set(this.props.selectedAirlines)

    if (airlines.has(value)) {
      airlines.delete(value);
    } else {
      airlines.add(value);
    }

    this.props.onAirlinesChange(airlines);
  }

  handleFilterSubmit = () => {
    const { timings } = this.state;
    const { selectedAirlines } = this.props;
    debugger;
    const departsWithin = timings.find((timing) => timing.value === parseInt(this.props.departureAt, 10)).time;
    const arrivalsWithin = timings.find((timing) => timing.value === parseInt(this.props.arrivalAt, 10)).time;

    this.props.onFilterSubmit(departsWithin, arrivalsWithin, selectedAirlines);
  }

  render() {
    return (
      <div id="filter">
        <form>
          <div className="settingsArea">
            <SelectBox
              options={this.state.timings}
              title={"Departure Time"}
              value={this.props.departureAt}
              onChange={this.handleDepartureAtChange}
            />
            <SelectBox
              options={this.state.timings}
              title={"Return time"}
              value={this.props.arrivalAt}
              onChange={this.handleArrivalAtChange}
            />
            <fieldset className="filter stations">
              <legend>Preferred Airlines</legend>
              {
                this.props.airlines.map((airline) => {
                  return (
                    <label for={airline.carrier_code}>
                      <input
                        id={airline.carrier_code}
                        type="checkbox"
                        value={airline.carrier_code}
                        name="airline_codes"
                        onChange={this.handleAirlineChange}
                        checked={this.props.selectedAirlines.has(airline.carrier_code)}
                      />
                      <div className={`flight-icons ${airline.short_carrier_name}`}></div>
                      <span>{airline.carrier_name}</span>
                    </label>
                  )
                })
              }
            </fieldset>
          </div>
          <p className="action">
            <button type="button" id="applyFilter" onClick={this.handleFilterSubmit}>Filter flights</button>
          </p>
        </form>
      </div>
    );
  }
}

Filter.defaultProps = {
  airlines: [],
};

Filter.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
