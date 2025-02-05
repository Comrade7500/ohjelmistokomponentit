//lukijakirjoittaja.js

import fs from "node:fs/promises";

class Oletus{
    muunna(muunnettava){
        return muunnettava;
    }
}

class lukijakirjoittaja{
    #muunnin

    constructor(muunnin) {
        this.#muunnin=muunnin;
    }

    async lueVarasto(tiedostopolku){
        try{
            const data = await fs.readFile(tiedostopolku, 'utf8');
            return JSON.parse(data).map(arvo=>this.#muunni.muunna(arvo));
        }

        catch(virhe){
            console.log(virhe);
            return [];
        }
    }
}
export {lukijakirjoittaja}