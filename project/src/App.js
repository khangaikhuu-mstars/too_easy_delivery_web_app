import React from 'react';
import Footer from './components/Footer';
import SliderWeb from './components/SliderWeb';
import InfoPanel from './components/InfoPanel';
import Menu from './components/menu';
import MainDish from './components/MainDish';
import SaladAndDesert from './components/SaladAndDesert';
import './css/footer.css'
import './App.css';
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'

function App() {
  return (
    <div>
      <Menu />
      <SliderWeb />
      <InfoPanel />
      <SaladAndDesert/>
      <MainDish/>
      <Footer />
    </div>
  )
}

export default App;
