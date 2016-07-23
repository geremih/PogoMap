import {
  SCANNING_STARTED,
  SCANNING_COMPLETE,

} from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  scanning: false,
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case SCANNING_STARTED:
      return state.set('scanning', true);
    case SCANNING_COMPLETE:
      return state.set('scanning', false);
    default:
      return state;
  }
}
