import MainDish from './MainDishComponent'
import SaladAndDesert from './SaladAndDesertComponent'
import DiscountProduct from './DiscountProductComponent'
import DesertComponent from './DesertComponent'
import { NavLink } from 'react-router-dom'

function CategoryContainer() {
  return (
    <div className="container">
      <div className="category">
        <h2 className="title">Хямдралтай</h2>
        <button className="seeMoreButton" type="button">
          <NavLink  className="onWeb"  to='/menu/discountProduct'>Бүгдийг харах</NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <div className='cardContainer'>
        <DiscountProduct slice={true} />
      </div>

      <div className="category ">
        <h2 className="title"> Үндсэн хоол</h2>
        <button className="seeMoreButton" type="button">
          <NavLink  className="onWeb" to='/menu/main'>Бүгдийг харах</NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <MainDish slice={true} mobiledata={false} />

      <div className="category">
        <h2 className="title"> Салат ба зууш</h2>
        <button className="seeMoreButton" type="button">
        <NavLink  className="onWeb" to='/menu/saladAndDesert'>Бүгдийг харах</NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <SaladAndDesert slice={true} />

      <div className="category">
        <h2 className="title"> Амттан</h2>
        <button className="seeMoreButton" type="button">
        <NavLink  className="onWeb" to='/menu/desert'>Бүгдийг харах</NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <DesertComponent slice={true} />
    </div>
  )
}
export default CategoryContainer
