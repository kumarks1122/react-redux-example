import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
	render() {
    return (
      <fieldset className="filter">
        <legend>{this.props.title}</legend>
        <select value={this.props.value} onChange={this.props.onChange}>
        	{
            this.props.options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })
          }
        </select>
      </fieldset>
    )
  }
}

SelectBox.defaultProps = {
	options: [],
	title: "Select",
};
SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  value: PropTypes.number,
};

export default SelectBox;
