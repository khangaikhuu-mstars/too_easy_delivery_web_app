import FoodsData from '../data/foods.json'
import CardComponent from './CardComponent'

function MainDish({ slice, category }) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Үндсэн хоол'
  })

  filterFoodsData = slice ? filterFoodsData.slice(0, 4) : filterFoodsData

  return <CardComponent data={slice ? filterFoodsData.slice(0, category ? 2 : 4) : filterFoodsData} />
}

export default MainDish
