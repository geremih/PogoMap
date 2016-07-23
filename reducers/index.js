import user from './user';
import pokemon from './pokemon';
import session from './session';

import {
  combineReducers,
} from 'redux';

export default combineReducers({
  user,
  pokemon,
  session,
});
