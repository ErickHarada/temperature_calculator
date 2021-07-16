import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

function TemperatureInput(props) {

    return (
        <fieldset>
            <legend>Informe a temperatura em {scaleName[props.scale]}</legend>
            <input
                type={props.scale}
                value={props.temperature}
                onChange={(e) => props.onTemperatureChange(e.target.value)}
            />
        </fieldset>
    );
}

export default TemperatureInput;