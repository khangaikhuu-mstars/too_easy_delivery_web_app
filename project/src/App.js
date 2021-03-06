import React from 'react'
import Footer from './components/FooterComponent'
import Menu from './components/MenuComponent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Delivery from './components/DeliveryComponent'
import Main from './components/MainComponent'
import Home from './components/HomeComponent'
import Login from './components/FormLoginComponent'
import Register from "./components/FormRegisterComponent"
import Password from './components/ForgotPasswordComponent'
import SearchResultComponent from './components/SearchResultComponent'
import { Redirect } from 'react-router-dom'
import './css/footer.css'
import './App.css'
import '../src/css/InfoPanel.css'
import '../src/css/sliderWeb.css'
import '../src/css/menu.css'
import '../src/css/submenu.css'
import '../src/css/categoryContainer.css'
import '../src/css/search.css'
import '../src/css/form.css'


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
          <Route path="/login" component={Login}></Route>
          <Route path="/search" component = {SearchResultComponent}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/password' component={Password}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
