import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Clima = ({ resul }) => {

    const { name, main } = resul

    if (!name) return null;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">{parseFloat(main.temp - 273.15,10).toFixed(2)}
                    <span>&#x2103;</span>
                </p>

                <p>Temperatura Maxima:
                    {parseFloat(main.temp_max - 273.15,10).toFixed(2)}
                    <span>&#x2103;</span>
                </p>

                <p>Temperatura Minima:
                    {parseFloat(main.temp_min - 273.15,10).toFixed(2)}
                    <span>&#x2103;</span>
                </p>

            </div>
        </div>
     );
}

Clima.protpType = {
    resul: PropTypes.object.isRequired
}
 
export default Clima;