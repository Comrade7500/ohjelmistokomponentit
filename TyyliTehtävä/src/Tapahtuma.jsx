import React from "react";
import "./Tapahtuma.css";

function Tapahtuma({ tapahtuma, poistaTapahtuma }) {
  return (
    <div className={`tapahtuma tapahtuma-${tapahtuma.kategoria.toLowerCase()}`}>
      <h3>{tapahtuma.nimi}</h3>
      <p>{tapahtuma.paivamaara}</p>
      <p>Kategoria: {tapahtuma.kategoria}</p>
      <button onClick={() => poistaTapahtuma(tapahtuma.id)}>Poista</button>
    </div>
  );
}

export default Tapahtuma;
