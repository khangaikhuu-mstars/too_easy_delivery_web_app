import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, DropdownButton, MenuItem} from "react-bootstrap";
function Menu() {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Нүүр</Nav.Link>
                            <Nav.Link href="#action2">Хоолны цэс</Nav.Link>
                            <Nav.Link href="#action2">Хүргэлтийн бүс</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <a href="haha">
                    <img src="/image/search.svg"/>
                </a>
                <DropdownButton title={<span><i className="zurag"></i></span>}>
               
                </DropdownButton>
            </Container>
        </Navbar>
    )
}

export default Menu