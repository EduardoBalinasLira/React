import React, { useReducer } from 'react';

import pokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';
import { 
    AGREGAR_POKEMON,
    AGREGAR_ERROR,
    AGREGAR_NOMBRE
 } from '../type/index'

const PokemonState = props => {
    const initialState = {
        pokemon: 'pikachu',
        error: false,
        info_pokemon : {}
    }

    const [ state, dispatch ] = useReducer(pokemonReducer, initialState);


    const modificarError = parameter => {
        dispatch({
            type: AGREGAR_ERROR,
            payload: parameter
        })

    }

    const modificarPokemon = parameter => {
        dispatch({
            type: AGREGAR_NOMBRE,
            payload: parameter
        })
    }

    const modificarInfoPokemon = parameter => {
        dispatch({
            type: AGREGAR_POKEMON,
            payload: parameter

        })
    }


    return (
        <pokemonContext.Provider
            value={{
                pokemon: state.pokemon,
                error: state.error,
                info_pokemon: state.info_pokemon,
                modificarPokemon,
                modificarError,
                modificarInfoPokemon
            }}
        >
            { props.children }

        </pokemonContext.Provider>
    )

}

export default PokemonState;