import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, DropdownButton, MenuItem } from "react-bootstrap";
import foodDeliveryLogo from '../image/fooddelivery.svg'
import searchLogo from '../image/search.svg'
import adminLogo from '../image/admin.svg'
import button from '../image/button.svg'
import basket from '../image/basketIcon.svg'
import searchIcon from '../image/searchIcon.svg'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import Main from "./main";
import { NavLink } from "react-router-dom";
import foodmenu from '../image/foodmenu.png'
import seemore from '../image/seemore.png'
function Menu() {
    return (
        <div>
            <BrowserRouter>
                <Navbar expand="md" className="mainss">
                    <Container className="text-align-center">

                        <Navbar.Toggle aria-controls="navbarScroll" className="changecolor" />
                        <div className="del">
                            <a href="" className="text-decoration-none">
                                <img src={foodDeliveryLogo}></img>
                                <p1 className='fooddelivery orangeFont poppins text-decoration-none'>Food Delivery</p1>
                            </a>
                        </div>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"

                                style={{ maxHeight: '100px' }}
                            >
                                <div className="d-flex collapse0">
                                    <Nav.Link to='./main' className="menu nuur orangeFont poppins">НҮҮР</Nav.Link>
                                    <Nav.Link to='./menu' className="menu poppins black">ХООЛНЫ ЦЭС</Nav.Link>
                                    <Nav.Link to='./main' className="menu poppins black">ХҮРГЭЛТИЙН БҮС</Nav.Link>
                                </div>
                                <div className="collapse1">
                                    <div className="d-flex justify-content-between">
                                        <img src={foodmenu} alt="" />
                                        <Nav.Link to='./' >Хоолны цэс</Nav.Link>
                                        <img src={seemore}></img>
                                    </div>
                                    <div>
                                        
                                        <Nav.Link to='./' >Хүргэлтийн бүс</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link to='./' >Хэрэглэгчийн мэдээлэл</Nav.Link>
                                    </div>
                                    <div>
                                        <Nav.Link to='./' >Миний захиалга</Nav.Link>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>

                        <div className="d-flex">
                            <div>
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
            </BrowserRouter>
            <div>
            </div>
        </div>

    )
}

export default Menu