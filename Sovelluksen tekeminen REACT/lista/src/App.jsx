import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Infolista from './infolista';

function App() {
  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Hei</h1>
      <Infolista lista={tiedot} />
    </div>
  );
}

export default App;
