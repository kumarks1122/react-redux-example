import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import flight from './reducers/flight';
import common from './reducers/common';

export default combineReducers({ flight, common, router: routerReducer });