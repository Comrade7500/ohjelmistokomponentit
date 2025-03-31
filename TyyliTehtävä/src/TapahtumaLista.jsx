import React from "react";
import Tapahtuma from "./Tapahtuma";
import "./TapahtumaLista.css";

function TapahtumaLista({ tapahtumat, poistaTapahtuma }) {
  return (
    <div className="tapahtuma-lista">
      {tapahtumat.length === 0 ? (
        <p>Ei lisättyjä tapahtumia.</p>
      ) : (
        tapahtumat.map((t) => (
          <Tapahtuma
            key={t.id}
            tapahtuma={t}
            poistaTapahtuma={poistaTapahtuma}
          />
        ))
      )}
    </div>
  );
}

export default TapahtumaLista;
