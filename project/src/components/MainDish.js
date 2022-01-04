import CardComp from "./CardComp";
import FoodsData from '../data/foods.json';

function MainDish() {
    let filterFoodsData = FoodsData.filter((element) =>{
        return element.category == 'Үндсэн хоол'
    }).slice(0 , 4)
    return (
        <div className="container">
            <div className="mainDish ">
                <h2 className="title"> Үндсэн хоол</h2>
                    <button className="mainDishButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
            </div>
            <CardComp data={filterFoodsData}/>
         </div>
    )
}
export default MainDish;
