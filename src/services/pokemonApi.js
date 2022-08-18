import React from 'react';
import axios from 'axios';

export const getPokemonDetailById = (pokeId) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
};

export const getAllPokemon = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon');
};
