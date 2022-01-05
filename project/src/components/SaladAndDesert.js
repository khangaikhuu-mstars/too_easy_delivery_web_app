import React from "react";
import '../css/SaladAndDesert.css'
import CardComp from "./CardComp";
import FoodsData from '../data/foods.json';

function SaladAndDesert() {
    let filterFoodsData = FoodsData.filter((element) =>{
        return element.category == 'Салад ба зууш'
    }).slice(0 , 4)
    return (
            <CardComp data={filterFoodsData}/>
    )
}
export default SaladAndDesert;