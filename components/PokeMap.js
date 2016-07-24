import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  ToolbarAndroid,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  connect,
} from 'react-redux';
import MapView from 'react-native-maps';
import {
  refresh,
  updateUserLocation,
  logout,
} from '../actions/user';

import {
  onWildPokemon,
} from '../actions/pokemon';
import {
  MKButton,
} from 'react-native-material-kit';
import Pokemon from '../pokemon';
import Proto from '../pokemon_pb';
const RequestEnvelop = Proto.RequestEnvelop;
const ResponseEnvelop = Proto.ResponseEnvelop;
import S2 from '../S2';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 400,
    width: 400,
  },

  toolbar: {
    height: 56,
    backgroundColor:'red',
  },
  information: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowColor: 'black',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
});

class PokeMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region : {
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        ...props.user.location,
      },
    };
    //props.updateUserLocation();
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
      this.props.logout();
    }
  }

  render() {
    let information;
    if (this.props.session.scanning) {
      information = (
        <View>
          <Text>
            Scanning
          </Text>
          <Text>
            {this.props.session.status}
          </Text>
        </View>
      )
    } else {
      information = (
        <TouchableOpacity>
          <MKButton
            style={styles.button}
              onPress={() => this.props.updateUserLocation()}
            >
              <Text>
                Scan
              </Text>
            </MKButton>
          </TouchableOpacity>
        );
    }
    return (
      <View>

        <ToolbarAndroid
          title="PokeMap"
          style={styles.toolbar}
          actions={[{title: 'Logout'}]}
          onActionSelected={(position) => this.onActionSelected(position)}
        />
        <View>
          <View
            style={styles.container}
          >

            <MapView
              style={styles.map}
              region={this.state.region}
              showsUserLocation
              followsUserLocation
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
          </View>
        </View>

        <View
          style={styles.information}
        >
          {information}
        </View>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    pokemon: state.pokemon.toArray(),
    user: state.user.toJS(),
    session: state.session.toJS(),
  };
}
const PokeMapContainer = connect(mapStateToProps, {
  refresh,
  updateUserLocation,
  onWildPokemon,
  logout,
})(PokeMap);
export default PokeMapContainer;

