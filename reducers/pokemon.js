
import {
  WILD_POKEMON_ADDED,

} from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List();

export default function user(state = initialState, action) {
  switch (action.type) {
    case WILD_POKEMON_ADDED:
      return state.push(action.payload.pokemon);
    default:
      return state;
  }
}
