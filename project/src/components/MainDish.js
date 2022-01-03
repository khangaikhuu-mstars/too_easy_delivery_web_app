import React from "react";
import { ButtonComponent } from "./ButtonComponent";
import '../css/mainDish.css'

function MainDish() {
    return (
        <div className="mainDish container">
            <h2 className="title"> Үндсэн хоол</h2>
                <button className="mainDishButton" type="button">
                    <h2 className="onWeb">Бүгдийг харах</h2> 
                    <span className="rightArrow">&#62;</span>
                </button>

        </div>
    )
}
export default MainDish;
