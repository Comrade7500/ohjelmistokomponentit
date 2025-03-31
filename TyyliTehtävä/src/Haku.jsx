import React from "react";
import "./Haku.css";

function Haku({ setHakuKategoria }) {
  return (
    <div className="haku">
      <select onChange={(e) => setHakuKategoria(e.target.value)}>
        <option value="">Näytä kaikki</option>
        <option value="Työ">Työ</option>
        <option value="Vapaa-aika">Vapaa-aika</option>
        <option value="Opiskelu">Opiskelu</option>
      </select>
    </div>
  );
}

export default Haku;
