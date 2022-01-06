import React from 'react'
import Submenu from './Submenu'
import DiscountProduct from './DiscountProduct'
import SaladAndDesert from './SaladAndDesert'
import CategoryContainer from './CategoryContainer'
import  {Route} from 'react-router-dom'
import MainDish from './MainDish'
import DesertComponent from './DesertComponent'
import { Container } from 'react-bootstrap'
function Main() {
  return (
    <>
    <Container> <Submenu/>
      <Route exact path='/main' component={MainDish}></Route>
      <Route path='/main/discountProduct' component={DiscountProduct}></Route>
      <Route path='/main/saladAndDesert' component={SaladAndDesert}></Route>
      <Route path='/main/categoryContainer' component={CategoryContainer}></Route>
      <Route path='/main/desert' component={DesertComponent}></Route></Container>
    </>
  )}
export default Main
