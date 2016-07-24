import React, {
  Component,
} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  MKButton,
  MKSpinner,
} from 'react-native-material-kit';

const styles = StyleSheet.create({

  bgContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  credContainer: {
    marginHorizontal: 20,
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

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signingIn: false,
    };
  }
  render() {

    let button;
    const onDone = () => this.setState({
      signingIn: false,
    });
    if (this.state.signingIn) {
      button = (
        <MKSpinner />
      );
    } else {
      button =  (
        <TouchableOpacity>
          <MKButton
            style={styles.button}
            onPress={() => {
                this.props.login(this.state.username, this.state.password, onDone);
                this.setState({
                  signingIn: true,
                });
              }}
          >
            <Text>
              Login
            </Text>
          </MKButton>
        </TouchableOpacity>
      )
    }

    return (
      <View
        style={styles.bgContainer}
      >
        <View
          style={styles.credContainer}
        >
          <TextInput
            placeholder="Username"
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
          />
          {button}
        </View>
      </View>
    );
  }
}
