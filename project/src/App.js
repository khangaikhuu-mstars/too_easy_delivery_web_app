import './css/footer.css'
import Footer from './components/Footer';
import './App.css';
import React from 'react';
import SliderWeb from './components/sliderWeb';
import InfoPanel from './components/InfoPanel';
import '../src/css/Info_panel.css'

function App() {
  return (
    <div>
      <SliderWeb />
      <InfoPanel />
      <Footer />
    </div>
  )
}

export default App;