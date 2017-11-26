import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <fieldset className="filter">
        <legend>{this.props.title}</legend>
        <select>
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
};

export default SelectBox;
