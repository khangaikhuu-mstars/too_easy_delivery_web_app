import DesertComponent from "./DesertComponent";
import MainDish from "./MainDish";
import SaladAndDesert from "./SaladAndDesert";
import DiscountProduct from './DiscountProduct'
function CategoryContainer() {
    return(
                            // MainDish  title  
           <div className="container">
              <div className="category">
                <h2 className="title"> Үндсэн хоол</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
             </div>
                    <MainDish/>

                            {/* SaladAndDesert title  */}
             <div className="category">
                <h2 className="title"> Салат ба зууш</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
                    <SaladAndDesert/>

                            {/* DsicountProduct title  */}
             <div className="category">
                <h2 className="title">Хямдралтай</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
                    <DiscountProduct/>

                            {/* DesertComponent title  */}
             <div className="category">
                <h2 className="title">Амттан</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
                    <DesertComponent/>
        </div>
    )
}
export default CategoryContainer;