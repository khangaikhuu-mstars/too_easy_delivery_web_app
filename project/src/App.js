import React from 'react';
import Footer from './components/Footer';
import SliderWeb from './components/SliderWeb';
import InfoPanel from './components/InfoPanel';
import Menu from './components/menu';
import MainDish from './components/MainDish';
import './css/footer.css'
import './App.css';
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Delivery from './components/delivery';
import Main from './components/main'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path='/delivery' component={Delivery}></Route>
          <Route path='/main' component={Main}></Route>
        </Switch>
        <SliderWeb />
        <InfoPanel />
        <MainDish />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
