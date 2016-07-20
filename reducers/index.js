import user from './user';
import pokemon from './pokemon';


import {
  combineReducers,
} from 'redux';

export default combineReducers({
  user,
  pokemon,
});
