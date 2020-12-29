import React, { useContext, useEffect, Fragment } from 'react';
import pokemonContext from '../context/pokemonContext';
import axios from 'axios'
import InfoPokemon from './InfoPokemon';

const Pokemon = () => {

    const peticion = useContext(pokemonContext);
    const { pokemon, modificarError, modificarInfoPokemon } = peticion

    useEffect(() => {
        const pokemonAPI = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon} `
            try{
                const resultado = await axios.get(url)
                modificarInfoPokemon(resultado.data);
                console.log(resultado.data);
              
            }catch {
                modificarError(true)
            }
        }

        pokemonAPI()
    }, [pokemon]);

    return ( 
        <Fragment>
            <InfoPokemon />
        </Fragment>
     );
}
 
export default Pokemon;

