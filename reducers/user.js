import {
  LOCATION_UPDATED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  username: null,
  password: null,
  loggedIn: false,
  location: Immutable.Map({
    latitude: 18.542162,
    longitude: 73.83247,
  }),
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOCATION_UPDATED:
      return state.set('location', action.payload.location);

    case LOGIN_SUCCESS:
      return state
        .set('loggedIn', true)
        .set('username', action.payload.username)
        .set('password', action.payload.password);
    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
}
