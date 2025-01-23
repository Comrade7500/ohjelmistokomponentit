import * as React from "react";

function OpiskelijaTiedot(props) {


  return (
    <div>
      <p>nimi: {props.opiskelija.nimi}</p>
      <p>ikä: {props.opiskelija.ika}</p>
      <p>kurssi: {props.opiskelija.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;
