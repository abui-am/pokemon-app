import { useState } from 'react';
import { getAllPokemon } from '../services/pokemonApi';
import axios from 'axios';
const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const search = async () => {
    const response = await getAllPokemon();

    const resultAll = await Promise.all(
      response.data.results.map(async (poke) => {
        const res = await axios.get(poke.url);
        return res.data;
      })
    );

    if (selectedType) {
      const details = selectedType.value
        ? resultAll.filter((value) => {
            const typeNames = value.types.map((type) => type.type.name);
            return typeNames.includes(selectedType.value);
          })
        : resultAll;

      setPokemons(details);
    } else {
      return setPokemons(resultAll);
    }
  };
  return { search, selectedType, setSelectedType, setPokemons, pokemons };
};

export default usePokemon;
