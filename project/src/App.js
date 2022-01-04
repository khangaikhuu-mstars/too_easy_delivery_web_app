import React from 'react';
import Footer from './components/Footer';
import Menu from './components/menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Delivery from './components/delivery'
import Main from './components/main'
import Home from './components/home'
import './css/footer.css'
import './App.css'
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    // <BrowserRouter>
    //   <div>
    //     <Menu />
    //     <Switch>
    //       <Route path="/home" component={Home}></Route>
    //       <Route path="/delivery" component={Delivery}></Route>
    //       <Route path="/main" component={Main}></Route>
    //     </Switch>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
    <SearchComponent/>
  )
}

export default App
