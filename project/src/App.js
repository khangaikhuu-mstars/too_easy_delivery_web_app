import React from 'react';
import Footer from './components/Footer';
import SliderWeb from './components/SliderWeb';
import InfoPanel from './components/InfoPanel';
import './css/footer.css'
import './App.css';
import '../src/css/InfoPanel.css'

function App() {
  return (
    <div className='container'>
      <SliderWeb />
      <InfoPanel />
      <Footer />
    </div>
  )
}

export default App;
