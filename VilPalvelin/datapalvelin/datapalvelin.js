'use strict';

const  http = require('http');
const path = require('path');

const asetukset = require('./config.json');

const virheViesti=`
################################################
Käyttö: node datapalvelin <asetustiedosto>

Esimerkki: node datapalvelin jaatelovarasto.json
################################################`;

if(process.argv.length<3){
    console.log(virheViesti);
}
else{
    const [,,asetusTiedostoPolku] = process.argv;

    try{
        const asetustiedosto=require(path.join(
            __dirname,
            asetukset.varastot.kansio,
            asetukset.asetustiedostokansio,
            asetusTiedostoPolku
            ));
        kaynnistaPalvelin(asetustiedosto);
    }
    catch(virhe){
        console.log(virhe);
        console.log(`Asetustiedostoa '${asetusTiedostoPolku}' ei löydy`);
    }
}

function kaynnistaPalvelin(asetustiedosto){
    // console.log(asetustiedosto);
    const kirjastokansioPolku=path.join(__dirname,asetukset.kirjasto.kansio);
   
    const varastokansioPolku=path.join(__dirname,
                                        asetukset.varastot.kansio,
                                        asetustiedosto.varasto.kansio
                                        );
    kaynnistaPalvelin
    const varastokerrosPolku=
        path.join(kirjastokansioPolku,asetukset.kirjasto.varastokerros);

    const varastokasittelijaPolku=
        path.join(kirjastokansioPolku, asetukset.kirjasto.varastokasittelija);
    
    const varastoAsetuksetPolku=
        path.join(varastokansioPolku, asetustiedosto.varasto.asetustiedosto);

    // console.log(kirjastokansioPolku);
    // console.log(varastokansioPolku);
    // console.log(varastokerrosPolku);
    // console.log(varastokasittelijaPolku);
    // console.log(varastoAsetuksetPolku);

    const {luoVarasto} =require(varastokerrosPolku);

    const {
        haeKaikki,
        hae,
        haeArvot,
        haeAvaimet,
        haeKuva,
        perusavain,
        hakuavaimet,
        resurssi
    } =luoVarasto(varastoAsetuksetPolku,varastokansioPolku,varastokasittelijaPolku);

    // console.log(perusavain,hakuavaimet,resurssi);
    // haeKaikki().then(console.log);
    // hae(1).then(console.log);
    // hae(3,'hinta').then(console.log);
    // hae(4, 'hinta').then(console.log);
    // haeArvot('hinta').then(console.log).catch(console.log);
    // haeArvot('hinta',true).then(console.log).catch(console.log);
    // haeAvaimet().then(console.log).catch(console.log);
    // haeKuva('mansikka.png').then(console.log).catch(console.log);

    const palvelin = http.createServer(async (req,res)=>{
        const {pathname, searchParams} = 
            new URL(`http://${req.headers.host}${req.url}`);
        const reitti=decodeURIComponent(pathname);

        try{
            if(reitti==='/'){
                lahetaJson(res,resurssi);
            }
            else if(reitti===`/${resurssi}/avaimet`){
                lahetaJson(res, await haeAvaimet());
            }
            else if(reitti===`/${resurssi}/hakuavaimet`){
                lahetaJson(res,hakuavaimet);
            }
            else if(reitti===`/${resurssi}/perusavain`){
                lahetaJson(res,perusavain);
            }
            else if(reitti===`/${resurssi}`){
                lahetaJson(res, await haeKaikki());
            }
            else if (reitti === `/${resurssi}/ehdolla`){
                const hakuavain=valitsehakuavain(searchParams);
                if(hakuavain){
                    const hakuarvo=searchParams.get(hakuavain);
                    const tulos = await hae(hakuarvo,hakuavain);
                    lahetaJson(res, tulos);
                }
                else{
                    lahetaJson(res,{
                        virhe:`Hakuavain ei ole joukossa '${hakuavaimet.join()}`
                    });
                }
            }
            else if(reitti === `/${resurssi}/arvot`){
                const hakuavain=searchParams.get('avain');
                const kertaalleen = searchParams.has('kertaalleen');
                if(hakuavain){
                    lahetaJson(res,await haeArvot(hakuavain,kertaalleen));
                }
                else{
                    lahetaJson(res,{
                        virhe:'hakuavainta "avain" ei löydy'
                    });
                }
            }
            else if(reitti===`/${resurssi}/kuvat`){
                const nimi=searchParams.get('nimi');
                if(nimi){
                    const kuva=await haeKuva(nimi);
                    if(kuva && kuva.kuvaData){
                        return lahetaKuva(res,kuva);
                    }
                }
                res.statusCode=404;
                res.setHeader('Access-Control-Allow-Origin','*');
                res.end();
            }
            else{
                lahetaJson(res, {
                    virhe:`resurssia ${reitti} ei löydy`
                });
            }
        }
        catch(virhe){
            lahetaJson(res,{virhe:virhe.message});
        }
    }); //palvelimen loppu


    palvelin.listen(asetustiedosto.port,asetustiedosto.host,
    ()=>console.log(`${asetustiedosto.host}:${asetustiedosto.port} palvelee`));


    //apufunktiot

    function lahetaJson(res, jsonResurssi){
        const jsonData=JSON.stringify(jsonResurssi);
        res.writeHead(200,{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        });
        res.end(jsonData);
    }

    function lahetaKuva(res,kuvaresurssi){
        res.writeHead(200,{
            'Content-Type':kuvaresurssi.mime.tyyppi,
            'Content-Length':Buffer.byteLength( kuvaresurssi.kuvaData,
                                                kuvaresurssi.mime.koodaus),
            'Access-Control-Allow-Origin': '*'                   
        });
        res.end(kuvaresurssi.kuvaData,kuvaresurssi.mime.koodaus);
    }

    function valitsehakuavain(hakuParams){
        for(const avain of hakuavaimet){
            if(hakuParams.has(avain)){
                return avain;
            }
        }
        return null;
    }


} //kaynnistaPalvelin loppu