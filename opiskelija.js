

let opiskelija = {nimi: "Johannes", ika: 21, kurssi: "ohjelmointi"};


console.log(opiskelija.nimi)

class auto {
    constructor(merkki,malli,vuosimalli){
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }

    tulostus(){
        console.log(`merkki: ${this.merkki} malli: ${this.malli} vuosimalli: ${this.vuosimalli}`)
    }
}

let auto1 = new auto("Forwo", "gigantic", 1999 )

auto1.tulostus();


let kirjat = [
    {nimi: "Haruhi Suzumiya", kirjailija: "Japanese guy", vuosi: "2006"},
    {nimi: "Tunnel of summer", kirjailija: "Mei Hachimoku", vuosi: "2016"},
    {nimi: "Re:zero", kirjailija: "Isekaiboy", vuosi: "2013"}
];

kirjat.forEach((kirja) => {
console.log(`Nimi: ${kirja.nimi}, Kirjailija: ${kirja.kirjailija}, Vuosi: ${kirja.vuosi}`)
})


