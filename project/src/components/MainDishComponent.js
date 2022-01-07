import FoodsData from '../data/foods.json'
import CardComp from './CardComponent'

function MainDish({slice}) {
  let filterFoodsData = FoodsData.filter((element) => {
    return element.category == 'Үндсэн хоол'
  })
  return (
    <div className='mainDish'>
      <CardComp data={slice? filterFoodsData.slice(0, 4): filterFoodsData} />
    </div>
  )
}

export default MainDish
