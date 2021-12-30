import React from 'react';
import Footer from './components/Footer';
import SliderWeb from './components/SliderWeb';
import InfoPanel from './components/InfoPanel';
import './css/footer.css'
import './App.css';
import '../src/css/InfoPanel.css'
import BreadCrumbComponent from './components/BreadCrumbComponent';

function App() {
  return (
    <div>
      <SliderWeb /> 
      <InfoPanel />
      <BreadCrumbComponent></BreadCrumbComponent>
       <Footer />
    </div>
  )
}

export default App;
