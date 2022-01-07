import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'

function DesertComponent({slice}) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Амттан'
  })
  return <CardComp data={slice? filterFoodsData.slice(0,4):filterFoodsData } />
}

export default DesertComponent
