import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Delivery from './components/Delivery'
import Main from './components/Main'
import Home from './components/Home'
import './css/footer.css'
import './App.css'
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'
import '../src/css/submenu.css'
import '../src/css/categoryContainer.css'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/delivery" component={Delivery}></Route> 
          <Route path="/main" component={Main}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
