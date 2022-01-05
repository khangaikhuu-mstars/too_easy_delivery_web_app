import React from 'react'
import CardComp from './CardComp'
import FoodsData from '../data/foods.json'

function DiscountProduct() {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.sales == true
  })
  return(
      <div className='discountClass'>
          <CardComp   data={filterFoodsData}/>
      </div>
  ) 
}
export default DiscountProduct
