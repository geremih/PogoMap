import {
  LOCATION_UPDATED,
} from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  username: 'username',
  password: 'pass',
  location: Immutable.Map({
    latitude: 18.542162,
    longitude: 73.83247,
  }),
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOCATION_UPDATED:
      return state.set('location', action.payload.location);
    default:
      return state;
  }
}
