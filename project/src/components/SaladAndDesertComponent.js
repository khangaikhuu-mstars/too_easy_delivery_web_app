import React from 'react'
import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'

function SaladAndDesert() {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Салад ба зууш'
  })
  return <CardComp data={filterFoodsData} />
}

export default SaladAndDesert
