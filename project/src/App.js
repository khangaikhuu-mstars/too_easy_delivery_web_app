import './App.css';
import React from 'react';
import InfoPanel from './components/InfoPanel';
import '../src/css/Info_panel.css'
import ScrollWidth from './components/scrollwidth';


function App() {
  return (

    <div>
      <ScrollWidth />
      <InfoPanel />

    </div>

  )
}

export default App;
