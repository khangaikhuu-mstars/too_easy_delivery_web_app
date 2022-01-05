import DesertComponent from "./DesertComponent";
import MainDish from "./MainDish";
import SaladAndDesert from "./SaladAndDesert";

function CategoryContainer() {
    return(
        <div className="container">
              <div className="mainDish ">
                <h2 className="title"> Үндсэн хоол</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
             </div>
                    <MainDish/>

             <div className="SaladAndDesert ">
                <h2 className="title"> Салат ба зууш</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
                    <SaladAndDesert/>

             <div className="Discount">
                <h2 className="title">Хямдралтай</h2>
                    <button className="seeMoreButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>

             <div className="Discount">
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