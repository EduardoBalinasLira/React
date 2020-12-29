import React from 'react';
import pokeball from '../pokeball.png';

import styled from '@emotion/styled';

const Contenedor = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: red;
    height: 200px;
    @media(max-width:640px){
        height:100px;
    }
`;

const Imagen = styled.img`
    width:100px;
    margin-right:10px;

    @media(max-width: 640px){
        width: 50px;
    }
`;

const HH = styled.h1`
    font-size: 40px;
    font-family: 'Press Start 2P', cursive; 
    color: #464646;
    letter-spacing: 2px;

    @media(max-width: 640px){
        font-size: 30px;
        margin-top:3%;
    }

`;

const Header = () => {
    return ( 
        <div className="container-fluit">
            <Contenedor>
            <Imagen src={pokeball}/> 
            <HH>Pokedex</HH>
            </Contenedor>
        </div>
     );
}
 
export default Header;