import {
  WILD_POKEMON_ADDED,
} from '../constants/ActionTypes';


export function onWildPokemon(pokemon) {
  return {
    type: WILD_POKEMON_ADDED,
    payload: {
      pokemon,
    },
  };
}
