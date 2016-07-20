import {
  LOCATION_UPDATED,
} from '../constants/ActionTypes';

import Immutable from 'immutable';
import WebApi from '../WebApi';
import {
  onWildPokemon,
} from './pokemon';


export function refresh() {

  return (dispatch, getState) => {
    const user = getState().user.toJS();
    const location = user.location;
    let accessToken;
    let endpoint;
    let useAuth;
    WebApi.getAccessToken(user.username, user.password)
      .then((token) => {
        console.log('Access Token:', token);
        accessToken = token;
        return WebApi.getEndpoint(accessToken, location);
      })
      .then(url => {
        endpoint = url;
        console.log('Endpoint', endpoint);
        return WebApi.getProfile(endpoint, accessToken, location);
      })
      .then(response => {
        useAuth = response.unknown7;
        console.log('Setting auth to:', useAuth);
      })
      .then(() => WebApi.stepHeartbeat(endpoint, accessToken, location, useAuth,
                                       (pokemon) => dispatch(onWildPokemon(pokemon))));
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
