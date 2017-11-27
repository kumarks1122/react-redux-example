import {
  FLIGHT_PAGE_LOADED,
  FLIGHT_PAGE_UNLOADED,
  FILTER_TRIP,
  UPDATE_FIELD_FILTER,
  INITIAL_TRIP_CHANGE,
  RETURN_TRIP_CHANGE
} from '../helpers/actionTypes';

const defaultState = {
  selectedAirlines: new Set([]),
  trips: [],
  initialTripSelected: {},
  returnTripSelected: {}  
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FLIGHT_PAGE_LOADED:
      return {
        ...state,
        trips: action.payload[0],
        airlines: action.payload[1],
        initialTripSelected: action.payload[0].initial_flights ? action.payload[0].initial_flights[0] : {},
        returnTripSelected: action.payload[0].return_flights ? action.payload[0].return_flights[0] : {}
      };
    case FLIGHT_PAGE_UNLOADED:
      return defaultState;
    case FILTER_TRIP:
      return {
        ...state,
        trips: action.payload[0],
      };
    case UPDATE_FIELD_FILTER:
      return { ...state, [action.key]: action.value };
    case INITIAL_TRIP_CHANGE:
      return { ...state, initialTripSelected: action.payload };
    case RETURN_TRIP_CHANGE:
      return { ...state, returnTripSelected: action.payload };
    default:
      return state;
  }
};
