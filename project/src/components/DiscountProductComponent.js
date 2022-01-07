import CardComp from './CardComponent'
import FoodsData from '../data/foods.json'

function DiscountProduct({ slice, category }) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.sales == true
  })
  return <CardComp data={slice ? filterFoodsData.slice(0, category ? 2 : 4) : filterFoodsData} />
}

export default DiscountProduct
