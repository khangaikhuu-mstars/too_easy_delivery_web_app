import React from 'react'
import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'

function SaladAndDesert({slice}) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Салад ба зууш'
  })
  return <CardComp data={slice? filterFoodsData.slice(0, 4) : filterFoodsData} />
}

export default SaladAndDesert
