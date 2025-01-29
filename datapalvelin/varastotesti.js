import path from "node:path";

import { fileURLToPath } from "node:url";
const JUURIPOLKU = fileURLToPath(new URL(".", import.meta.url));

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const asetukset = require("./varastot/jaatelovarasto/asetukset.json");
import { muunna } from "./varastot/jaatelovarasto/jaatelosovitin.js";
import { lukijakirjoittaja } from "./varastokirjasto/lukijakirjoittaja.js";

const varastotiedostopolku = path.join(JUURIPOLKU, "varastot", "jaatelovarasto", "jaatelot.json");

import { Varastokerros } from "./varastokirjasto/varastokerros.js";

const KIRJASTOT = {varastoconfig:asetukset, sovitin:muunna, varastofunktiot:{lukijakirjoittaja},
polut: {
    varastotiedostopolku,
    kuvakansiopolku:path.join(JUURIPOLKU,"varastot", "jaatelovarasto", "kuvat")
}};

const varasto=new Varastokerros(KIRJASTOT);
varasto.hae("id",1).then(console.log);
varasto.hae("hinta",3).then(console.log);

varasto.haeKaikki().then(console.log);
varasto.haeArvot("hinta,false").then(console.log)