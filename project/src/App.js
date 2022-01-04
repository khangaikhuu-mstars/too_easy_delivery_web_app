<<<<<<< HEAD
import React from 'react';
import Footer from './components/Footer';
import Menu from './components/menu';
=======
import React from 'react'
import Footer from './components/Footer'
import Menu from './components/menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Delivery from './components/delivery'
import Main from './components/main'
import Home from './components/home'
>>>>>>> 9ddf8d34e8103314b27d79f5f2e9ea36f4991491
import './css/footer.css'
import './App.css'
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/delivery" component={Delivery}></Route>
          <Route path="/main" component={Main}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
