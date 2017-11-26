import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';

import SelectBox from '../subcomponents/SelectBox';

class Filter extends Component {
  constructor(props) {
    super(props);

    const timings = [
      { value: 0, name: "Anytime" },
      { value: 1, name: "Early (Before 8am)" },
      { value: 2, name: "Morning (8am - 12pm)" },
      { value: 3, name: "Afternoon (12pm - 4pm)" },
      { value: 4, name: "Evening (4pm - 8pm)" },
      { value: 5, name: "Night (After 8pm)" },
    ]

    this.state = {
      timings: timings
    }
  }

  render() {
    return (
      <div id="filter">
        <form method="post" action="results.shtml">
          <div className="settingsArea">
            <SelectBox
              options={this.state.timings}
              title={"Departure Time"}
            />
            <SelectBox
              options={this.state.timings}
              title={"Return time"}
            />
            <fieldset className="filter stations">
              <legend>Preferred Airlines</legend>
              <label for="AI">
                <input id="AI" type="checkbox" value="AI" name="airline_codes" />
                <span className="airlogo fAI"></span> 
                <span>Air India</span>
              </label>
            </fieldset>
          </div>
          <p className="action">
            <button type="button" id="applyFilter" >Filter flights</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Filter;
