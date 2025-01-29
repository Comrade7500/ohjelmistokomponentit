import tiedot from "./varastot/jaatelovarasto/jaatelot.json" with {type:"json"};

console.log(Object.keys(tiedot[0]));

const nimet = new Set(tiedot.flatMap(alkio => Object.keys(alkio)));
console.log(nimet);