import React from 'react';
import Footer from './components/Footer';
import SliderWeb from './components/SliderWeb';
import InfoPanel from './components/InfoPanel';
import Menu from './components/menu';
import './css/footer.css'
import './App.css';
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'

function App() {
  return (
    <div>
      <Menu/>
      <InfoPanel/>
      <SliderWeb />
      <Footer />
    </div>
  )
}

export default App;
