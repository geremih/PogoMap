import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {
  MKCheckbox,
} from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    paddingHorizontal: 15,

  },
  text: {
    flex: 1,
    fontSize: 16,
  },
});

export default function PokeListView({ pokemon, blacklist, onChoose}) {
  return (
    <View
      style={styles.container}
    >
      <MKCheckbox
      />
      <Text
        style={styles.text}
      >
        {pokemon.Name}
      </Text>
      <Image
        style={styles.icon}
        source={{ uri: `poke_${parseInt(pokemon.Number)}` }}
      />
    </View>
  );
}

