import React from "react";
import '../css/SaladAndDesert.css'
import CardComp from "./CardComp";
import FoodsData from '../data/foods.json';

function SaladAndDesert() {
    let filterFoodsData = FoodsData.filter((element) =>{
        return element.category == 'Салад ба зууш'
    }).slice(0 , 4)
    return (
        <div className="container">
              <div className="SaladAndDesert ">
                <h2 className="title"> Салат ба зууш</h2>
                    <button className="SaladAndDesertButton" type="button">
                        <h2 className="onWeb">Бүгдийг харах</h2> 
                        <span className="rightArrow">&#62;</span>
                    </button>
               </div>
            <CardComp data={filterFoodsData}/>
        </div>
    )
}
export default SaladAndDesert;