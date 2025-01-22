# datapalvelin API

yleiskäyttöinen datapalvelin datatiedostojen hakuun

```json
[
    {
        "id":1,
        "nimi":"mansikka",
        "hinta":2,
        "kuva":"mansikka.png"
    },
    {
        "id":2,
        "nimi":"mustikka",
        "hinta":3,
        "kuva":"mustikka.png"
    },
        {
        "id":3,
        "nimi":"vadelma",
        "hinta":3,
        "kuva":"vadelma.png"
    }
]
```

olion rakenne on vapaa, mutta vain "ensimmäisen tason" kenttiä/avaimia voi käyttää tiedostojen hakemisessa.

esim seuraava on sallittu:

```json
[
    {
        "nimi":"eka",
        "tiedot":{
            "teksti":"jotain tekstiä",
            "huomautukset":["huom1","huom2"]
        }
    }
]
```

tässä voi hakea vain nimellä.

## Varastokerros-luokka API

### metodit

### **haeKaikki()**
palauttaa taulukossa kaikki oliot. Jos olioita ei ole tai tulee virhe, palauttaa tyhjän taulukon [].

### **hae(avain,arvo)**
palauttaa taulukossa kaikki oliot, joiden avaimen arvo on parametrina annettu `arvo`. Jos ehdon täyttäviä olioita ei löydy tai tulee virhe palauttaa tyhjän taulukon [].

```js
hae("id",1)
```

### **haeArvot(avain, vain Kerran=false)**
palauttaa taulukossa kaikki parametrina annetuun avaimen arvot. Jos arvoja ei löydy tai tulee virhe, palauttaa tyhjän taulukon []. Jos vainKerran on "true", niin arvo tulee taulukkoon vain kerran.

Esimerkki:
```js
harArvot("hinta");
tai
harArvot("hinta", false);
```
palauttaa
```json
[2,3,3]
```

```js
harArvot("hinta", true);
```

palauttaa
```json
[2,3]
```

### **haeAvaimet()**
palauttaa taulukon, jossa on kaikki olioista löytyvät avainten (kenttien) nimet. Tutkii vain ensimmäisen tason avaimet. Jos kenttiä ei löydy tai tulee virhe. Palauttaa tyhjän taulukon.

Esimerkiksi
```json
["id", "nimi", "hinta", "kuva"]
```

### **haeKuvalista**
palauttaa kuvahakemistossa olevien tiedostojen nimet taulukkona. Jos kuvia ei ole/tuli virhe, palauttaa tyhjän taulukon.

### **haeKuva(kuvatiedostonNimi)**
palauttaa kuvan ja siihen liittyvän kuvan mime-tyypin oliona. Olion rakenne on:

```js
{
    kuvaData,
    mime
}
```

missä kuvaData on kuvan binääridata (blob) ja mime on esim.

```js
{tyyppi:"", koodaus:"binary", koodaus: "binary"}
```

tässä versiossa tunnistetaan kuvat: png, jpeg, jpg, gif ja ico

virhetilanteessa palauttaa "null"

### getterit (vakiot)

### **perusavain**
palauttaa asetustiedostossa olevan "perusavain" kentän arvon.

### **hakuavaimet**
palauttaa asetustiedostossa olevan "hakuavaimet" kentän arvon. Hakuavaimet on taulukko.

### **resurssi**

palauttaa asetustiedostossa olevan "resurssi" kentän arvon.

## varastokäsittelijä-luokka API

Tarjoaa levyltä luku ja kirjoitus operaatiot

### metodit

### **lueVarasto(tiedostopolku)**
palauttaa JSON-taulukon. Virhetilanteessa palauttaa tyhjän taulukon []

### **luekKuva(kuvapolku)**

### **lueKuvalista(kuvakansiopolku)*

### **kirjoitaVarasto(tiedostopolku,data)**

