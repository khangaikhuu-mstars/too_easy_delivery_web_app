import FoodsData from '../data/foods.json'
import CardComp from './CardComp'

function MainDish() {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Үндсэн хоол'
  }).slice(0, 4)
  return <CardComp data={filterFoodsData} isSale={true}/>
}

export default MainDish;