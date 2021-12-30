import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, DropdownButton, MenuItem } from "react-bootstrap";
import foodDeliveryLogo from '../image/fooddelivery.svg'
import searchLogo from '../image/search.svg'
import adminLogo from '../image/admin.svg'
import button from '../image/button.svg'
import basket from '../image/basketIcon.svg'
function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="text-align-center">
                <div>
                    <img src={foodDeliveryLogo}></img>
                    <Navbar.Brand href="#" className='fooddelivery orangeFont'>Food Delivery</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"

                        navbarScroll
                    >
                        <div className="d-flex">
                            <Nav.Link href="#action1" className="menu orangeFont">Нүүр</Nav.Link>
                            <Nav.Link href="#action2" className="menu">Хоолны цэс</Nav.Link>
                            <Nav.Link href="#action2" className="menu">Хүргэлтийн бүс</Nav.Link>
                        </div>
                    </Nav>
                    <Form >
                        <FormControl
                            type="search"
                            placeholder="Хайх"
                            className="searchForm"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
                <div className="d-flex">

                    <div><img src={basket}></img>
                        <a href="#action2" className="basketLogo orangeFont">Сагс</a>
                    </div>
                    <div>
                        <img src={adminLogo}></img>
                        <a href="#action2" className="orangeFont adminLogo">Нэвтрэх</a>
                    </div>

                </div>


            </Container>
        </Navbar>
    )
}

export default Menu