import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'
import { useState, useEffect } from 'react'

function SaladAndDesert({ slice, category }) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Салад ба зууш'
  })

  return <CardComp data={slice ? filterFoodsData.slice(0, category ? 2 : 4) : filterFoodsData} />
}

export default SaladAndDesert
