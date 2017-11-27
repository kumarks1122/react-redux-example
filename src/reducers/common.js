import { APP_LOAD, ASYNC_START } from '../helpers/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case ASYNC_START:
      return {
        ...state,
        inProgress: true
      };
    default:
      return state;
  }
};
