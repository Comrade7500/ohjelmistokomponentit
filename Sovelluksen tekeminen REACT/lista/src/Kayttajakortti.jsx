import * as React from 'react';
import Hello from './Hello.jsx'
import Infolista from './infolista';

function Kayttajakortti({nimi, lista}){
    return (
        <div>
            <Hello nimi={nimi} />
            <Infolista lista={lista} />
        </div>
        
    )
};

export default Kayttajakortti;