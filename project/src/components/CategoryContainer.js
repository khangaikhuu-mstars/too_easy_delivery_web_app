import MainDish from './MainDish'
import SaladAndDesert from './SaladAndDesert'
import DiscountProduct from './DiscountProduct'
import DesertComponent from './DesertComponent'

function CategoryContainer() {
  return (
    
    <div className="container">
      <div className="category ">
        <h2 className="title">Хямдралтай</h2>
        <button className="seeMoreButton" type="button">
          <h2 className="onWeb">Бүгдийг харах</h2>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <DiscountProduct />

      <div className="category ">
        <h2 className="title"> Үндсэн хоол</h2>
        <button className="seeMoreButton" type="button">
          <h2 className="onWeb">Бүгдийг харах</h2>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <MainDish />

      <div className="category">
        <h2 className="title"> Салат ба зууш</h2>
        <button className="seeMoreButton" type="button">
          <h2 className="onWeb">Бүгдийг харах</h2>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <SaladAndDesert />

      <div className="category">
        <h2 className="title"> Амттан</h2>
        <button className="seeMoreButton" type="button">
          <h2 className="onWeb">Бүгдийг харах</h2>
          <span className="rightArrow">&nbsp; <i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
      <DesertComponent />

      
      
    </div>
  )
}
export default CategoryContainer




