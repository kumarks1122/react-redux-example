import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="/images/cleartrip_logo.gif" alt="cleartrip" height="25px" />
        </div>
        <ul>
          <li>
            <NavLink to="/" className="flight" activeClassName="selected"></NavLink>
          </li>
          <li>
            <NavLink to="/my-trips" className="suitcase" activeClassName="selected"></NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="settings" activeClassName="selected"></NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
