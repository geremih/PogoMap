const API_URL = 'https://pgorelease.nianticlabs.com/plfe/rpc';
const LOGIN_URL = 'https://sso.pokemon.com/sso/login?service=https%3A%2F%2Fsso.pokemon.com%2Fsso%2Foauth2.0%2FcallbackAuthorize';
const LOGIN_OAUTH = 'https://sso.pokemon.com/sso/oauth2.0/accessToken';
const headers = {'User-Agent': 'Niantic App',};
const credentials = 'include';
const RCTNetworking = require('RCTNetworking');
import POKEMON from './pokemon';
import RNFetchBlob from 'react-native-fetch-blob';
import varint from 'varint';
import S2 from './S2';
import Proto from './pokemon_pb';
const RequestEnvelop = Proto.RequestEnvelop;
const ResponseEnvelop =Proto.ResponseEnvelop;
const UnknownAuth = Proto.UnknownAuth;
import jspack from './jspack';
const jsstruct = jspack.jspack;

function serializeJSON(obj) {
  var str = [];
  for (var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
}

function encodeLong(num) {
  out = [];
  let value = num;
  let bits = value.and(0x7f);
  value =  value.shr(7);
  while(value.gt(0)) {
    out.push(bits.or(0x80).toInt());
    bits = value.and(0x7f);
    value = value.shr(7);
  }
  out.push(bits.toInt());
  return out;
}

function encodeWalk(walk) {
  const encoded = walk.sort((a, b) => a.compare(b)).map(cellid => encodeLong(cellid)
                                         .map(int => String.fromCharCode(int)).join(''))
                      .join('')
  return encoded;


}
import Long from 'long';

function f2i(float) {
  out = jsstruct.Pack('d', [float]);
  return new Long(jsstruct.Unpack('i', out.slice(4)), jsstruct.Unpack('i', out.slice(0, 4)), true);

}



class WebApi {

  getAccessToken(username, password) {
    RCTNetworking.clearCookies((success) => console.log(success)) ;
    return fetch(LOGIN_URL, {
      headers,
    })
      .then(response => response.json())
      .then(data => ( {
        lt: data.lt,
        execution: data.execution,
        _eventId: 'submit',
        username,
        password,
      }))
      .then(data => fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials,
        body: serializeJSON(data),
      }))
     .then(response => response.url)
      .then(ticket => ticket.split('ticket=')[1])
      .then(ticket => ({
        client_id: 'mobile-app_pokemon-go',
        redirect_uri: 'https://www.nianticlabs.com/pokemongo/error',
        client_secret: 'w8ScCUXJQc6kXKw8FiOhd8Fixzht18Dq3PEVkUCP5ZPxtgyWsbTvWHFLm2wNY0JR',
        grant_type: 'refresh_token',
        code: ticket
      }))
      .then((data) => fetch(LOGIN_OAUTH, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...headers,
        },
        body: serializeJSON(data),
      }))
      .then(response => response.text())
      .then(response => response.split('token=')[1].split('&')[0])
  }

  apiRequest(url, access_token, location, requests, useAuth) {
    let auth;

    if (useAuth) {
      auth = {
        unknown11: new UnknownAuth({
          unknown71: useAuth.unknown71,
          unknown72: useAuth.unknown72,
          unknown73: useAuth.unknown73,
        })
      };
     } else {
       auth = {
         auth: new RequestEnvelop.AuthInfo({
           provider: 'ptc',
           token: new RequestEnvelop.AuthInfo.JWT(access_token, 59),
         }),
       };
     }
    const f_req = new RequestEnvelop({
      unknown1: 2,
      rpc_id: 1469378659230941192,
      requests: requests,
      latitude: f2i(location.latitude),
      longitude: f2i(location.longitude),
      altitude: f2i(location.altitude),
      unknown12: 989,
      ...auth,
    });
    //console.log('API Request', f_req);
    //console.log('API URL', url);
    const blob = f_req.encode().toBase64();
    return RNFetchBlob.fetch('POST', url, headers, blob)
                      .then(response => response.text())
                      .then(response => {
                        const b64 = btoa(response);
                        return b64;
                      })
                      .then(response => ResponseEnvelop.decode(response))
                      .then(response => {
                        return response
                      })
  }

  getEndpoint(access_token, location) {
    const req = [
      new RequestEnvelop.Requests(2),
      new RequestEnvelop.Requests(126),
      new RequestEnvelop.Requests(4),
      new RequestEnvelop.Requests(129),
      new RequestEnvelop.Requests(5),
    ];
    return this.apiRequest(API_URL, access_token, location, req)
               .then(response => `https://${response.api_url}/rpc`);
  }


  getProfile(endpoint, accessToken, location, requests = [  new RequestEnvelop.Requests(2),
                                                            new RequestEnvelop.Requests(126),
                                                            new RequestEnvelop.Requests(4),
                                                            new RequestEnvelop.Requests(129),
                                                            new RequestEnvelop.Requests(5)], useAuth) {

    return this.apiRequest(endpoint, accessToken, location, requests, useAuth);
  }


  async getHeartbeat(endpoint, accessToken, location, useAuth) {
    const walk = await S2.getNeighbours(location.latitude, location.longitude);
    var mquad = new RequestEnvelop.MessageQuad(btoa(encodeWalk(walk)),
                                               btoa('\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000'),
                                               f2i(location.latitude),
                                               f2i(location.longitude));
    var requests = [
      new RequestEnvelop.Requests(106, mquad.encode().toBase64()),
      new RequestEnvelop.Requests(126),
      new RequestEnvelop.Requests(4, (new RequestEnvelop.MessageSingleInt(Date.now())).encode().toBase64()),
      new RequestEnvelop.Requests(129),
      new RequestEnvelop.Requests(5, (new RequestEnvelop.MessageSingleString(btoa('05daf51635c82611d1aac95c0b051d3ec088a930'))).encode().toBase64())
    ];
    const response = await this.getProfile(endpoint, accessToken, location, requests, useAuth);
    return ResponseEnvelop.HeartbeatPayload.decode(response.payload[0].toBase64());
  }

  getChildren(location) {
    S2.getChildren(location.latitude, location.longitude);
  }

  async stepHeartbeat(endpoint, accessToken, location, useAuth, onWildPokemon) {
    let x   = 0;
    let y   = 0;
    let dx  = 0;
    let dy  = -1;
    let steps = 0;
    const steplimit = 3;

    let shiftedLocation = {
      latitude: location.latitude,
      longitude: location.longitude,
    };

    while (steps < Math.pow(steplimit, 2)) {
      children =  await S2.getChildren(shiftedLocation.latitude, shiftedLocation.longitude);
      for (const child of children) {
        try {
          const response = await this.getHeartbeat(endpoint, accessToken, child, useAuth);
          console.log('Hearbeat', response);
          for (const cell of response.cells) {
            if (cell.WildPokemon.length > 0) {
              for (const pokemon of cell.WildPokemon) {
                onWildPokemon({
                  latitude: pokemon.Latitude,
                  longitude: pokemon.Longitude,
                  disappearTime: Date.now() + pokemon.TimeTillHiddenMs,
                  id: pokemon.pokemon.PokemonId,
                });
              }
            }
          }

        }
        catch (error) {
          console.log('Request failed', error);
        }
      }
      if ((-steplimit/2 < x || x <= steplimit/2) && (-steplimit/2 < y || y <= steplimit/2)) {
        shiftedLocation = {
          latitude: (x * 0.0025) + location.latitude,
          longitude: (y * 0.0025) + location.longitude,
        }
      }
      if ((x === y) || (x < 0 & x === -y) || (x > 0 && x === (1-y))) {
        [dx, dy] = [-dy, dx];
      }
      [x, y] = [x + dx, y + dy];
      steps += 1;
    }
  }
}

export default new WebApi();
