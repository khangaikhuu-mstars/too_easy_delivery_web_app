import React from 'react';
import Footer from './components/Footer';
import SliderWeb from './components/SliderWeb';
import InfoPanel from './components/InfoPanel';
import Menu from './components/menu';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister'
import FormConfirmation from './components/FormConfirmation';
import './css/footer.css'
import './App.css';
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'
import './css/form.css'
function App() {
  return (
    <div>
      {/* <Menu />
      <SliderWeb />
      <InfoPanel></InfoPanel>
      <Footer /> */}
      <FormConfirmation/>
    </div>
  )
}

export default App;
