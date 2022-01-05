import React from "react";
import SliderWeb from "./SliderComponent";
import InfoPanel from "./InfoPanel";
import MainDish from "./MainDish";
import SaladAndDesert from "./SaladAndDesert";
function Home() {
    return (
        <div>
            <SliderWeb />
            <InfoPanel />
            <SaladAndDesert />
            <MainDish />
        </div>
    )
}
export default Home