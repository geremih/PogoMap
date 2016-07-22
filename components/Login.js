import React, {
  Component,
} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  MKButton,
} from 'react-native-material-kit';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="Username"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
        />
        <TouchableOpacity>
          <MKButton
            shadowRadius={2}
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.7}
            shadowColor="black"
            onPress={() => this.props.login(this.state.username, this.state.password)}
          >
            <Text>
              Login
            </Text>
          </MKButton>
        </TouchableOpacity>
      </View>
    );
  }
}
