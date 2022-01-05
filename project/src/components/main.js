import React from 'react'
import Submenu from './Submenu'
import DiscountProduct from '../components/DiscountProduct'
import SaladAndDesert from './SaladAndDesert'
import CategoryContainer from './CategoryContainer'
import { NavLink, Route, Switch } from 'react-router-dom'
import MainDish from './MainDish'
function Main() {
  return (
    <>
    <Submenu/>
      <Route path='/main/main' component={MainDish}></Route>
      <Route path='/main/discountProduct' component={DiscountProduct}></Route>
      <Route path='/main/saladAndDesert' component={SaladAndDesert}></Route>
      <Route path='/main/categoryContainer' component={CategoryContainer}></Route>
    </>
  )}
export default Main
