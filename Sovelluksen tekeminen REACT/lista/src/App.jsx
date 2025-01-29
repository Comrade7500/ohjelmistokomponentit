import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Infolista from './infolista';
import Linkkilista from './Linkkilista';
import Kayttajakortti from './Kayttajakortti';

function App() {
  const linkit = [{nimi: "Google", url: "https://google.com"}, {nimi: "React", url: "https://react.dev"}];
  const tiedot = ["React", "JavaScript", "CSS"];
  
  return (
    <div>
      <h1>Hei</h1>
      <Infolista lista={tiedot} />
      <Linkkilista lista={linkit} />

      <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />

    </div>
  );
}

export default App;
