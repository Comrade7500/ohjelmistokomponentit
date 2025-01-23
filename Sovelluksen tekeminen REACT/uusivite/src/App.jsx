import { useState } from 'react'

import * as React from 'react'
import Hello from './Hello.jsx'
import OpiskelijaTiedot from './OpiskelijaTiedot.jsx'



function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };
  return(
    <div>
      <Hello name="Johannes"/>
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  )
}

export default App
