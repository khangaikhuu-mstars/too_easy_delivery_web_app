import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, DropdownButton, MenuItem } from "react-bootstrap";
import foodDeliveryLogo from '../image/fooddelivery.svg'
import searchLogo from '../image/search.svg'
import adminLogo from '../image/admin.svg'
import button from '../image/button.svg'
import basketIcon from '../image/basketIcon.svg'
import userIcon from '../image/userIcon.png'
function Menu() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <div class="d-flex first-div">
                    <img src={foodDeliveryLogo} alt=""  className="deliveryLogo"/>
                    <h1 class="foodDelivery">Food Delivery</h1>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="#" class='orangeFont'>Нүүр</a>
                        <a class="nav-link" href="#">Хоолны цэс</a>
                        <a class="nav-link" href="#">Хүргэлтийн бүс</a>
                    </div>
                </div>
                <div>
                    <input class="form-control me-2" type="search" placeholder="Хайх" aria-label="Search"></input>
                </div>
                <div>
                    <img src={basketIcon}></img>
                    <p1 className='orangeFont'>Сагс</p1>
                </div>
                <div>
                    <img src={userIcon}></img>
                    <p1 className='orangeFont'>Нэвтрэх</p1>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    )
}

export default Menu