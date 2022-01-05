import React from "react";
import CardComp from "./CardComp";
import FoodsData from '../data/foods.json';

function SaladAndDesert() {
    let filterFoodsData = FoodsData.filter((element) =>{
        return element.sales == true
    })
    return (
            <CardComp data={filterFoodsData}/>
    )
}
export default SaladAndDesert;