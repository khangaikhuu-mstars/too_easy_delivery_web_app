import React from 'react'
import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'

function DiscountProduct(
  {slice}
) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.sales == true
  })
  return (
    <div className="discountClass">
      <CardComp data={slice? filterFoodsData.slice(0, 4) : filterFoodsData} />
    </div>
  )
}

export default DiscountProduct
