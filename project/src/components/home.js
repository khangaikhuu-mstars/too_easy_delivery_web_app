import React from "react";
import SliderWeb from "./SliderComponent";
import InfoPanel from "./InfoPanel";
import CategoryContainer from "./CategoryContainer";
import DiscountProduct from "./DiscountProduct";

function Home() {
    return (
        <div>
            <SliderWeb />
            <InfoPanel />
            <CategoryContainer/>
        </div>
    )
}
export default Home