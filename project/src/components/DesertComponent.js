import CardComp from './CardComp'
import FoodsData from '../data/foods.json'

function DesertComponent() {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Амттан'
  }).slice(0, 4)
  return <CardComp data={filterFoodsData} />
}
export default DesertComponent
