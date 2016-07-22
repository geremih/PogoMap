import React, {
  Component,
} from 'react';
import {
  Scene,
  Router,
  Switch,
} from 'react-native-router-flux';


import {
  connect,
} from 'react-redux';

import PokeMap from './PokeMap';
import Login from './Login';
import {
  login,
} from '../actions/user';

class PogoNearby extends Component {

  render() {

    return (
      <Router >
        <Scene
          key="root"
          component={connect(state => ({ loggedIn: state.user.get('loggedIn') }))(Switch)}
          selector={props => props.loggedIn ? 'Auth' : 'unAuth'}
          tabs
        >
          <Scene
            key="unAuth"
            hideNavBar
            hideTabBar
          >
            <Scene
              key="login"
              component={Login}
              passProps
              login={this.props.login}
            />
          </Scene>
          <Scene
            key="Auth"
            hideTabBar
            hideNavBar
          >
            <Scene
              key="pokeMap"
              component={PokeMap}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}


const PogoNearbyContainer = connect(null, { login })(PogoNearby);
export default PogoNearbyContainer;
