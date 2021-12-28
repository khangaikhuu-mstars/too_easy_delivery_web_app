import './App.css';
import React from 'react';
import InfoPanel from './components/InfoPanel';
import ButtonComponent  from './components/ButtonComponent';
import Slider from './components/Slider';
import '../src/css/Info_panel.css'

function App() {
  return (
    <div>
      <Slider/>
      <InfoPanel/>
      <ButtonComponent/>
    </div>
    )
}

export default App;
