import {
  LOCATION_UPDATED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SCANNING_STARTED,
  SCANNING_COMPLETE,
} from '../constants/ActionTypes';

import Immutable from 'immutable';
import WebApi from '../WebApi';
import {
  onWildPokemon,
} from './pokemon';
import {
  updateStatus,
} from './session';

export function login(username, password, onFailed) {
  return (dispatch) => {
    WebApi.getAccessToken(username, password)
      .then((token) => {
        console.log('Access Token:', token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            username,
            password,
          },
        });
      })
      .catch(error => {
        if (onFailed) {
          onFailed(error);
        }
      });
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS,
    payload: {},
  };
}


export function refresh() {

  return (dispatch, getState) => {
    dispatch({
      type: SCANNING_STARTED,
      payload: {},
    });
    const user = getState().user.toJS();
    const location = user.location;
    let accessToken;
    let endpoint;
    let useAuth;
    dispatch(updateStatus(`0. Logging in ${user.username}`));
    WebApi.getAccessToken(user.username, user.password)
      .then((token) => {
        console.log('Access Token:', token);
        dispatch(updateStatus(`1. Logged in (Token: ${token})`));
        accessToken = token;
        return WebApi.getEndpoint(accessToken, location);
      })
      .then(url => {
        endpoint = url;
        console.log('Endpoint', endpoint);
        dispatch(updateStatus(`2. Received endpoint (Token: ${endpoint})`));
        return WebApi.getProfile(endpoint, accessToken, location);
      })
      .then(response => {
        useAuth = response.unknown7;
        dispatch(updateStatus('3. Received profile'));
        console.log('Setting auth to:', useAuth);
      })
      .then(() => {
        dispatch(updateStatus('4. Running heartbeats 0%'));
        const updateProgress = (percent) =>
                dispatch(updateStatus(`4. Running heartbeats ${percent}%`));
        return WebApi.stepHeartbeat(endpoint, accessToken, location, useAuth,
                                    ((pokemon) => dispatch(onWildPokemon(pokemon))),
                                    updateProgress);
      })

      .then(() => dispatch({
        type: SCANNING_COMPLETE,
        payload: {},
      }))
      .catch(() => dispatch({
        type: SCANNING_COMPLETE,
        payload: {},
      }));
  };
}

export function updateUserLocation() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = Immutable.Map({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(location);
        dispatch({
          type: LOCATION_UPDATED,
          payload: {
            location,
          },
        });
        dispatch(refresh());
      },
      (error) => console.log(error)
    );
  };
}
