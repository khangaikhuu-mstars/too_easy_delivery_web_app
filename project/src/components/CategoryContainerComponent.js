import MainDish from './MainDishComponent'
import SaladAndDesert from './SaladAndDesertComponent'
import DiscountProduct from './DiscountProductComponent'
import DesertComponent from './DesertComponent'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CategoryContainer() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="container">
      <div className="category">
        <h2 className="title">Хямдралтай</h2>
        <button className="seeMoreButton" type="button">
          <NavLink className="navLink" to="/menu/discountProduct">
            <h4 className="onWeb">Бүгдийг харах </h4>{' '}
          </NavLink>
          <NavLink className="rightArrow" to="/menu/discountProduct">
            {' '}
            <span>
              &nbsp; <i class="fas fa-chevron-right"></i>
            </span>
          </NavLink>
        </button>
      </div>
      <div>
        <DiscountProduct slice={true} category={dimensions.width < 769 ? true : false} />
      </div>

      <div className="category ">
        <h2 className="title"> Үндсэн хоол</h2>
        <button className="seeMoreButton" type="button">
          <NavLink className="navLink" to="/menu/main">
            <h4 className="onWeb">Бүгдийг харах </h4>{' '}
          </NavLink>
          <NavLink className="rightArrow" to="/menu/main">
            {' '}
            <span>
              &nbsp; <i class="fas fa-chevron-right"></i>
            </span>
          </NavLink>
        </button>
      </div>
      <MainDish slice={true} category={dimensions.width < 769 ? true : false} />

      <div className="category">
        <h2 className="title"> Салат ба зууш</h2>
        <button className="seeMoreButton" type="button">
          <NavLink className="navLink" to="/menu/SaladAndDesert">
            <h4 className="onWeb">Бүгдийг харах </h4>{' '}
          </NavLink>
          <NavLink className="rightArrow" to="/menu/SaladAndDesert">
            {' '}
            <span>
              &nbsp; <i class="fas fa-chevron-right"></i>
            </span>
          </NavLink>
        </button>
      </div>
      <SaladAndDesert slice={true} category={dimensions.width < 769 ? true : false} />

      <div className="category">
        <h2 className="title"> Амттан</h2>
        <button className="seeMoreButton" type="button">
          <NavLink className="navLink" to="/menu/desert">
            <h4 className="onWeb">Бүгдийг харах </h4>{' '}
          </NavLink>
          <NavLink className="rightArrow" to="/menu/desert">
            {' '}
            <span>
              &nbsp; <i class="fas fa-chevron-right"></i>
            </span>
          </NavLink>
        </button>
      </div>
      <DesertComponent slice={true} category={dimensions.width < 769 ? true : false} />
    </div>
  )
}
export default CategoryContainer
