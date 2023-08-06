import { createSlice } from "@reduxjs/toolkit";
import { emptyPokemon } from "./pokemons.constants";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    player1: emptyPokemon,
    player2: emptyPokemon,
  },
  reducers: {
    getPokemons: (state, { payload }) => {
      state.pokemons = payload.pokemons;
    },
    selectPlayer1: (state, { payload }) => {
      state.player1 = payload.pokemon;
    },
    selectPlayer2: (state, { payload }) => {
      state.player2 = payload.pokemon;
    },
    editPlayer1: (state, { payload }) => {
      if (state.player1 !== null) {
        state.player1.currentHP = parseFloat(
          (state.player1.currentHP - payload).toFixed(2)
        );
      }
    },
    editPlayer2: (state, { payload }) => {
      if (state.player2 !== null) {
        state.player2.currentHP = parseFloat(
          (state.player2.currentHP - payload).toFixed(2)
        );
      }
    },
  },
});

export const {
  getPokemons,
  selectPlayer1,
  selectPlayer2,
  editPlayer1,
  editPlayer2,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
