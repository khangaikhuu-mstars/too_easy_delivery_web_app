import React from "react";
import { ButtonComponent } from "./ButtonComponent";
import '../css/mainDish.css'

function MainDish() {
    return (
        <div className="mainDish container">
            <h2 className="title"> Үндсэн хоол</h2>
            <ButtonComponent className="onWeb" buttonStyle="btn--colorFilled" buttonSize="">Бүгдийг харах</ButtonComponent>
           <ButtonComponent className="arrowButton" buttonStyle='btn--withArrow' buttonSize='btn--withChevronArrow' ></ButtonComponent>
        </div>
    )
}
export default MainDish;
