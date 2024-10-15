import React from 'react';
import PlanetProvider from './Context/PlanetProvider';

import './App.css';

import Planets from './Pages/Planets';

function App() {
  return (
    <PlanetProvider>
      <Planets />
    </PlanetProvider>
  );
}

export default App;
