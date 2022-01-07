import MainDish from './MainDishComponent'
import SaladAndDesert from './SaladAndDesertComponent'
import DiscountProduct from './DiscountProductComponent'
import DesertComponent from './DesertComponent'
import { NavLink } from 'react-router-dom'

function CategoryContainer() {
  return (
    <div className="container">
      <div className="category ">
        <h2 className="title">Хямдралтай</h2>
        <button className="seeMoreButton" type="button">
          <NavLink to='/menu/discountProduct'><h2 className="onWeb ">Бүгдийг харах</h2></NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <DiscountProduct />

      <div className="category ">
        <h2 className="title"> Үндсэн хоол</h2>
        <button className="seeMoreButton" type="button">
          <NavLink to='/menu/main'><h2 className="onWeb">Бүгдийг харах</h2></NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <MainDish />

      <div className="category">
        <h2 className="title"> Салат ба зууш</h2>
        <button className="seeMoreButton" type="button">
        <NavLink to='/menu/saladAndDesert'><h2 className="onWeb">Бүгдийг харах</h2></NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <SaladAndDesert />

      <div className="category">
        <h2 className="title"> Амттан</h2>
        <button className="seeMoreButton" type="button">
        <NavLink to='/menu/desert'><h2 className="onWeb">Бүгдийг харах</h2></NavLink>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <DesertComponent />
    </div>
  )
}
export default CategoryContainer
