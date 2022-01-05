import React from "react";
import SliderWeb from "./SliderComponent";
import InfoPanel from "./InfoPanel";
import MainDish from "./MainDish";
import SaladAndDesert from "./SaladAndDesert";
import CategoryLabel from "./CategoryLabel";
function Home() {
    return (
        <div>
            <SliderWeb />
            <InfoPanel />
            <CategoryLabel/>
            {/* <SaladAndDesert />
            <MainDish /> */}
        </div>
    )
}
export default Home