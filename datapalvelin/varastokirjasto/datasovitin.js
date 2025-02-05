class Muunnin {
    #muunnettavat
    
    constructor(numerokentät=[]){
        this.#muunnettavat=numerokentät;
    }
    muunna(muunnettavaOlio){
        if(!muunnettavaOlio) return {};
        if (this.#muunnettavat.length===0) return muunnettavaOlio;
        const uusi={};
        const avaimet=Object.keys(muunnettavaOlio);
        for(const avain of this.#muunnettavat){
            if (avaimet.includes(avain)){
                apu=+muunnettavaOlio[avain];
                if(!isNaN(apu)){
                    uusi[avain]=apu;
                }
            }
            else{
                uusi=[avain]=muunnettavaOlio[avain];
            }
        }
        return Object.assign(muunnettavaOlio, uusi);
    }
}