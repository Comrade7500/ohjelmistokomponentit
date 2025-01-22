//lukijakirjoittaja.js

import fs from "node:fs/promises";

class lukijakirjoittaja{
    #muunnin

    constructor(muunnin) {
        this.#muunnin=muunnin;
    }

    async lueVarasto(tiedostopolku){
        try{
            const data = await fs.readFile(tiedostopolku, 'utf8');
            return JSON.parse(data).map(arvo=>this.#muunnin(arvo));
        }

        catch(virhe){
            console.log(virhe);
            return [];
        }
    }
}
export {lukijakirjoittaja}