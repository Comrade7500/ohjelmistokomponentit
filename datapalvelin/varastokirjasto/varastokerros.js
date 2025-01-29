 //lukijakirjoittaja.js
import path from "node:path";

class Varastokerros{

    #lukija
    #varastopolku
    #kuvakansioPolku
    #asetukset

    constructor(KIRJASTOT){
        this.#asetukset=KIRJASTOT.varastoconfig;
        this.#varastopolku=KIRJASTOT.polut.varastotiedostopolku;
        this.#kuvakansioPolku=KIRJASTOT.polut.kuvakansiopolku;
        const {lukijakirjoittaja} = KIRJASTOT.varastofunktiot;
        this.#lukija = new lukijakirjoittaja(KIRJASTOT.sovitin);
    }

    get perusavain(){
        return this.#asetukset.perusavain;
    }


    get hakuavaimet(){
        return this.#asetukset.hakuavaimet;
    }

    get resurssi(){
        return this.#asetukset.resurssi;
    }

    async haeKaikki(){
        return await this.#lukija.lueVarasto(this.#varastopolku);
    }

    async hae(avain,arvo){
        if(arguments.lenght<2) return [];
        const tiedot = await this.#lukija.lueVarasto(this.#varastopolku);
        return tiedot.filter(alkio=>alkio[avain]==arvo);
    }

    async haeArvot(avain, vainKertaalleen=false){
        try {
            const tiedot = await this.#lukija.lueVarasto(this.#varastopolku);
            const arvot = [];
            if(alkio[avain] && typeof alkio[avain] !== "undefined"){
                arvot.push(alkio[avain]);
            }
            if(vainKertaalleen){
                const apu = new Set(arvot);
                return [...apu];
            }
            return arvot;
        }
        catch(virhe){
            console.log(virhe);
            return[];
        }
    }

    async haeAvaimet(){
        const tiedot = await this.#lukija.lueVarasto(this.#varastopolku);
        const nimet = new Set(tiedot.flatMap(alkio => Object.keys(alkio)));
        return [...nimet];
    }
}


export {Varastokerros}