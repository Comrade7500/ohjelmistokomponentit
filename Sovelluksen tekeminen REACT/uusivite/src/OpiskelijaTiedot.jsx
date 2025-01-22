import * as React from "react";

function OpiskelijaTiedot() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <p>Opiskelijan nimi: {opiskelija.nimi}</p>
      <p>Opiskelijan ikä: {opiskelija.ika}</p>
      <p>Opiskelijan kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;
