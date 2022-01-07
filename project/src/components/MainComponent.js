import React from 'react'
import Submenu from './SubmenuComponent'
import DiscountProduct from './DiscountProductComponent'
import SaladAndDesert from './SaladAndDesertComponent'
import CategoryContainer from './CategoryContainerComponent'
import { Route, Redirect } from 'react-router-dom'
import MainDish from './MainDishComponent'
import DesertComponent from './DesertComponent'
import { Container } from 'react-bootstrap'

function Main() {
  return (
    <>
      <Container>
        <Submenu />
        <Route exact path="/menu" render={() => <Redirect to={'/menu/main'} />}></Route>
        <Route exact path="/menu/main" component={MainDish}></Route>
        <Route path="/menu/discountProduct" component={DiscountProduct}></Route>
        <Route path="/menu/saladAndDesert" component={SaladAndDesert}></Route>
        <Route path="/menu/categoryContainer" component={CategoryContainer}></Route>
        <Route path="/menu/desert" component={DesertComponent}></Route>
      </Container>
    </>
  )
}
export default Main
