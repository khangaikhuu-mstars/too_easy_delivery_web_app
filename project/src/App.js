import './App.css';
import React from 'react';
import InfoPanel from './components/InfoPanel';
import Menu from './components/menu';


import Slider from './components/Slider';
import '../src/css/Info_panel.css'

function App() {
  return (
    <div>
      <Menu/>
      <Slider/>
      <InfoPanel/>
    </div>
    )
}

export default App;
