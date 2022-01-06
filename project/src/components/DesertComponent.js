import CardComp from './CardComp'
import FoodsData from '../data/foods.json'

function DesertComponent() {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Амттан'
  })
  return <CardComp data={filterFoodsData} />
}

export default DesertComponent;
