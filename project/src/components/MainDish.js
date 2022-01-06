import FoodsData from '../data/foods.json'
import CardComp from './CardComp'

function MainDish() {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Үндсэн хоол'
  })
  return <CardComp data={filterFoodsData} isSale={true} />
}
export default MainDish
