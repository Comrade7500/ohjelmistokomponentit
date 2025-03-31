import React, { useState } from "react";
import "./App.css";
import TapahtumaLomake from "./tapahtumalomake";
import TapahtumaLista from "./TapahtumaLista";
import Haku from "./haku";

function App() {
  const [tapahtumat, setTapahtumat] = useState([]);
  const [hakuKategoria, setHakuKategoria] = useState("");

  const lisaaTapahtuma = (tapahtuma) => {
    setTapahtumat([...tapahtumat, tapahtuma]);
  };

  const poistaTapahtuma = (id) => {
    setTapahtumat(tapahtumat.filter((t) => t.id !== id));
  };

  const suodatetutTapahtumat = hakuKategoria
    ? tapahtumat.filter((t) => t.kategoria === hakuKategoria)
    : tapahtumat;

  return (
    <div className="app-container">
      <h1>Tapahtumasovellus</h1>
      <TapahtumaLomake lisaaTapahtuma={lisaaTapahtuma} />
      <Haku setHakuKategoria={setHakuKategoria} />
      <TapahtumaLista tapahtumat={suodatetutTapahtumat} poistaTapahtuma={poistaTapahtuma} />
    </div>
  );
}

export default App;
