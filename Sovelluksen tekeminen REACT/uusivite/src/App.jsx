import { useState } from 'react'

import * as React from 'react'
import Hello from './Hello.jsx'
import OpiskelijaTiedot from './OpiskelijaTiedot.jsx'



function App() {
  return(
    <div>
      <Hello name="Johannes"/>
      <OpiskelijaTiedot />
    </div>
  )
}

export default App
