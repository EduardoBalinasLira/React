import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:blue;
    width:500px;
    height:50px;
    border-radius:6px;
`;

const HH = styled.h1`
    color:white;
    font-family: 'Press Start 2P', cursive; 
    font-size:20px;
`;
const Error = ({ mensaje }) => {
    return ( 
        <Contenedor>
            <HH>{mensaje}</HH>
        </Contenedor>
     );
}
 
export default Error;