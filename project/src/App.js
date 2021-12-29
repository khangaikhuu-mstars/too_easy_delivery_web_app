import './App.css';
import React from 'react';
import InfoPanel from './components/InfoPanel';
import {Button} from './components/Button';
import Slider from './components/Slider';
import '../src/css/Info_panel.css'

function App() {
  return (
    <div>
      <Slider/>
      <InfoPanel/>
      <Button type="button" buttonStyle='btn--colorFilled' buttonSize='btn--nonBordered--flex'>-</Button>
    </div>
    )
}

export default App;
