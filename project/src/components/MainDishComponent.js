import FoodsData from '../data/foods.json'
import CardComponent from './CardComponent'
import React, {useEffect } from 'react';

function MainDish({slice }) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Үндсэн хоол'
  })
  
  filterFoodsData = slice ? filterFoodsData.slice(0, 4): filterFoodsData;

  const [dimensions, setDimensions] = React.useState({ 
    width: window.innerWidth
  })
  useEffect(() => {
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

  return (
      <CardComponent data={filterFoodsData}/>
  )
}

export default MainDish
