/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  View,
} from 'react-native';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import PogoNearby from './components/PogoNearby';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import immutableTransform from 'redux-persist-transform-immutable';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';


const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    for (const i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  },
});

Reactotron.connect({enabled: __DEV__});

const store = createStore(reducers,
                          applyMiddleware(thunk, Reactotron.reduxMiddleware, logger),
                          autoRehydrate());


export default class AppProvider extends Component {

  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, {
      storage: AsyncStorage,
      transforms: [immutableTransform({})],
    }, () => {
      this.setState({ rehydrated: true });
    }).purgeAll();
  }

  render() {
    console.log('Render status');
    /* if (this.state.rehydrated) {
     *   return <View/>;
     * }*/
    return (
      <Provider store={store}>
        <PogoNearby />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('PogoNearby', () => AppProvider);
