import MainDish from "./MainDish";
import SaladAndDesert from "./SaladAndDesert";
import DiscountProduct from './DiscountProduct'
function CategoryContainer() {
    return(
        <div className="container">
              <div className="category ">
                <h2 className="title"> Үндсэн хоол</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
             </div>
                    <MainDish/>

             <div className="category">
                <h2 className="title"> Салат ба зууш</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
                    <SaladAndDesert/>

             <div className="category">
                <h2 className="title">Хямдралтай</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
                    <DiscountProduct/>
        </div>
    )
}
export default CategoryContainer;