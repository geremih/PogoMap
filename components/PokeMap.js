import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native';
import {
  connect,
} from 'react-redux';
import MapView from 'react-native-maps';
import {
  refresh,
  updateUserLocation,
} from '../actions/user';
import ActionButton from 'react-native-action-button';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
import Pokemon from '../pokemon';
import Proto from '../pokemon_pb';
const RequestEnvelop = Proto.RequestEnvelop;
const ResponseEnvelop = Proto.ResponseEnvelop;
import S2 from '../S2';
class PokeMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region : {
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        ...this.props.user.location,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <ToolbarAndroid />
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
        >
          <MapView.Marker
            coordinate={this.props.user.location}
            title="You"
          />
          {this.props.pokemon.map((marker, i) => (
             <MapView.Marker
               key={i}
               coordinate={{
                   latitude: marker.latitude,
                   longitude: marker.longitude,
                 }}
               title={Pokemon[marker.id-1].Name}
               description={(new Date(marker.disappearTime)).toLocaleTimeString()}
               image={{ uri: `poke_${marker.id}` }}
             />
           ))}
          </MapView>
        <ActionButton
          onPress={() => this.props.updateUserLocation()}
        />
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    pokemon: state.pokemon.toJS(),
    user: state.user.toJS(),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    refresh: () => dispatch(refresh()),
    updateUserLocation: () => dispatch(updateUserLocation()),
    onWildPokemon: (pokemon) => dispatch(onWildPokemon(pokemon)),
  };
}
const PokeMapContainer = connect(mapStateToProps, mapDispatchToProps)(PokeMap);
export default PokeMapContainer;

