import React from 'react'
import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'

function SaladAndDesert({slice}) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Салад ба зууш'
  })
  filterFoodsData = slice ? filterFoodsData.slice(0, 4): filterFoodsData;

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }
    
    window.addEventListener('resize', handleResize)
  },[])
  
  if(dimensions.width < 769){
       filterFoodsData = filterFoodsData.slice(0, 2)
  }

  return <CardComp data={slice? filterFoodsData.slice(0, 4) : filterFoodsData} />
}

export default SaladAndDesert
