import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CustomContainer from '../components/CustomContainer';
import { getPokemonDetailById } from '../services/pokemonApi';
const PokemonDetail = () => {
  const [detailPokemon, setDetailPokemon] = useState();
  const { pokeId } = useParams();

  const getPokemonData = async () => {
    const res = await getPokemonDetailById(pokeId);
    setDetailPokemon(res.data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  if (!detailPokemon) return <div>Loading...</div>;
  return (
    <CustomContainer>
      <img alt='front' width={240} src={detailPokemon.sprites.front_default} />
      <img alt='back' width={240} src={detailPokemon.sprites.back_default} />
      <div>
        <h1>{detailPokemon.name}</h1>
      </div>

      <div>
        {detailPokemon.types.map((type) => (
          <span className='me-2 ms-2'>{type.type.name}</span>
        ))}
      </div>
    </CustomContainer>
  );
};

export default PokemonDetail;
