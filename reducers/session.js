import {
  SCANNING_STARTED,
  SCANNING_COMPLETE,
  UPDATE_STATUS,

} from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  scanning: false,
  status: '',
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case SCANNING_STARTED:
      return state.set('scanning', true);
    case SCANNING_COMPLETE:
      return state.set('scanning', false);
    case UPDATE_STATUS:
      return state.set('status', action.payload.status);
    default:
      return state;
  }
}
