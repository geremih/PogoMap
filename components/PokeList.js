import React, {
  Component,
} from 'react';
import {
  ListView,
} from 'react-native';
import Pokemon from '../pokemon';
import PokeListView from './PokeListView';

export default class PokeList extends Component {

  renderPokemon(pokemon) {
    return (
      <PokeListView
        pokemon={pokemon}
        blacklist
      />
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }).cloneWithRows(Pokemon);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(row) => this.renderPokemon(row)}
        enableEmptySections
        style={{ paddingTop: 8, flex: 1 }}
      />
    );
  }
}

