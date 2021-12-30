import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, DropdownButton, MenuItem } from "react-bootstrap";
import foodDeliveryLogo from '../image/fooddelivery.svg'
import searchLogo from '../image/search.svg'
import adminLogo from '../image/admin.svg'
import button from '../image/button.svg'
import basket from '../image/basketIcon.svg'
import searchIcon from '../image/searchIcon.svg'
function Menu() {
    return (
        <Navbar expand="md" className="mainss">
            <Container className="text-align-center">
            <Navbar.Toggle aria-controls="navbarScroll" />
                <div className="del">
                    <a href="" className="text-decoration-none">
                    <img src={foodDeliveryLogo}></img>
                    <p1 className='fooddelivery orangeFont poppins text-decoration-none'>Food Delivery</p1>
                    </a>
                </div>
        
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"

                        navbarScroll
                    >
                        <div className="d-flex">
                            <Nav.Link href="#action1" className="menu orangeFont poppins">НҮҮР</Nav.Link>
                            <Nav.Link href="#action2" className="menu poppins black">ХООЛНЫ ЦЭС</Nav.Link>
                            <Nav.Link href="#action2" className="menu poppins black">ХҮРГЭЛТИЙН БҮС</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex">
                    <div className="px-5">
                    <Form className="sform">
                        <FormControl
                            type="search"
                            placeholder="Хайх"
                            className="searchForm"
                            aria-label="Search"
                        />
                    </Form>
                    </div>
                    <div className="searchIcon">
                        <img src={searchIcon}></img>
                    </div>
                    <div className="px-3">
                        <img src={basket} className="basketLogo"></img>
                        <a href="#action2" className="basket orangeFont poppins px-1">Сагс</a>
                    </div>
                    <div>
                        <img src={adminLogo} className="adminLogo"></img>
                        <a href="#action2" className="orangeFont admin poppins px-1 text-decoration-none">Нэвтрэх</a>
                    </div>

                </div>


            </Container>
        </Navbar>
    )
}

export default Menu