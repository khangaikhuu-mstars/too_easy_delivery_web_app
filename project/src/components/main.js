import React from 'react'
import Submenu from './Submenu'
import DiscountProduct from '../components/DiscountProduct'
import SaladAndDesert from './SaladAndDesert'
import CategoryContainer from './CategoryContainer'
import { Route, Switch } from 'react-router-dom'
import MainDish from './MainDish'
function Main() {
  return (
    <Submenu>
      <Switch>
      <Route exact path='/main' component={MainDish}></Route>
      <Route path='/main/discountProduct' component={DiscountProduct}></Route>
      <Route path='/main/saladAndDesert' component={SaladAndDesert}></Route>
      <Route path='/main/categoryContainer' component={CategoryContainer}></Route>

      </Switch>
    </Submenu>)
}
export default Main
