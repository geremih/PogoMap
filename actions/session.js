import {
  UPDATE_STATUS,
} from '../constants/ActionTypes';


export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    payload: {
      status,
    },
  };
}
