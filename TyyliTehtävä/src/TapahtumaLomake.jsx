import React, { useState } from "react";
import "./TapahtumaLomake.css";

function TapahtumaLomake({ lisaaTapahtuma }) {
  const [nimi, setNimi] = useState("");
  const [paivamaara, setPaivamaara] = useState("");
  const [kategoria, setKategoria] = useState("");

  const kasitteleLomake = (e) => {
    e.preventDefault();
    if (nimi && paivamaara && kategoria) {
      lisaaTapahtuma({ id: Date.now(), nimi, paivamaara, kategoria });
      setNimi("");
      setPaivamaara("");
      setKategoria("");
    }
  };

  return (
    <form className="tapahtuma-lomake" onSubmit={kasitteleLomake}>
      <input
        type="text"
        placeholder="Tapahtuman nimi"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
      />
      <input
        type="date"
        value={paivamaara}
        onChange={(e) => setPaivamaara(e.target.value)}
      />
      <select value={kategoria} onChange={(e) => setKategoria(e.target.value)}>
        <option value="">Valitse kategoria</option>
        <option value="Työ">Työ</option>
        <option value="Vapaa-aika">Vapaa-aika</option>
        <option value="Opiskelu">Opiskelu</option>
      </select>
      <button type="submit">Lisää tapahtuma</button>
    </form>
  );
}

export default TapahtumaLomake;
