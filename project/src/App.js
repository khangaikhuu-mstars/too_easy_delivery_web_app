import React from 'react'
import Footer from './components/FooterComponent'
import Menu from './components/MenuComponent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Delivery from './components/DeliveryComponent'
import Main from './components/MainComponent'
import Home from './components/HomeComponent'
import './css/footer.css'
import './App.css'
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'
import '../src/css/submenu.css'
import '../src/css/categoryContainer.css'
<<<<<<< HEAD
import '../src/css/search.css'
=======
import { Redirect } from 'react-router-dom'
>>>>>>> cb64005eacfd3f3122ad79110000643e50faa37f

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={'/home'} />}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/delivery" component={Delivery}></Route>
          <Route path="/menu" component={Main}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
