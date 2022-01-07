import React from 'react'
import Submenu from './Submenu'
import DiscountProduct from './DiscountProduct'
import SaladAndDesert from './SaladAndDesert'
import CategoryContainer from './CategoryContainer'
import { Route, Redirect } from 'react-router-dom'
import MainDish from './MainDish'
import DesertComponent from './DesertComponent'
import { Container } from 'react-bootstrap'

function Main() {
  return (
    <>
      <Container>
        <Submenu />
        <Route exact path='/menu' render={()=><Redirect to={'/menu/main'} /> }></Route>
        <Route exact path='/menu/main' component={MainDish}></Route>
        <Route path='/menu/discountProduct' component={DiscountProduct}></Route>
        <Route path='/menu/saladAndDesert' component={SaladAndDesert}></Route>
        <Route path='/menu/categoryContainer' component={CategoryContainer}></Route>
        <Route path='/menu/desert' component={DesertComponent}></Route></Container>
    </>
  )
}
export default Main
