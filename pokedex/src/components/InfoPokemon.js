import React, { useContext, Fragment } from 'react';
import pokemonContext from '../context/pokemonContext';

import styled from '@emotion/styled';

const Img = styled.img`
    width:200px;
`;

const ID = styled.p`
    background-color: blue;
    color: white;
    width: 50px;
    text-align:center;
    font-size: 20px;
    border-radius: 6px;
`;

const InfoPokemon = () => {

    const poke = useContext(pokemonContext);
    const { info_pokemon } = poke

    const { abilities, sprites, height, weight } = info_pokemon

    const accederArregloHabilidades = (abilities) => {

        let nombres = [];
        let nombre = [];

        nombres = [abilities].filter(ability => ability)
         nombres.map(function(item, i=0) {
            nombre.push(item[i].ability.name)
        })   

        return <h5 className="card-text">Ability: { nombre }</h5>
    }

    const accederImagen = sprites => {

        let urls = []
        let url
        let link = []
        urls = [sprites].reduce(imagen => imagen === 'front_default')
        
        url = [urls].filter(front_default => front_default)
         url.map(function(item , i){
            link.push(item.front_default);
        })    

        return <Img src={link}/>
    }

    
    return ( 
        <div className="container">
            <div className="centrar">
                { accederImagen(sprites) }
                <h5 className="card-title">Name: { info_pokemon.name }</h5>
                { accederArregloHabilidades(abilities) }
                <h5 className="card-text">Weight: { weight } </h5>
                <h5 className="card-text">Height: { height } </h5>
                <ID>{ info_pokemon.id } </ID>
            </div>
        </div>
     );
}
 
export default InfoPokemon;