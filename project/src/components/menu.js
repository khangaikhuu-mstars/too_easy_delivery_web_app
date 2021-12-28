import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, DropdownButton, MenuItem } from "react-bootstrap";
import foodDeliveryLogo from '../image/fooddelivery.svg'
import searchLogo from '../image/search.svg'
import adminLogo from '../image/admin.svg'
import button from '../image/button.svg'
function Menu() {
    return (
        <Navbar  expand={false}>
            <Container>
                <div>
                    <img src={button} className='button'></img>
                </div>
                <div className='d-flex mt-2'>
                    <div className='foodDeliveryLogo'></div>
                    <div><h1 className='foodDelivery mt-1'>Food Delivery</h1></div>
                </div>
                <div>
                   <img src={searchLogo} className='searchLogo'></img>
                </div>
                <div>
                    <img src={adminLogo} className='adminLogo'></img>
                </div>
            </Container>
        </Navbar>
    )
}

export default Menu