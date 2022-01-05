import React from "react";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MainDish from "./MainDish";
function Submenu() {
    return (
        <Container>
            <Nav variant="pills" defaultActiveKey="/home" className="submenu">
                <Nav.Item className="me-2">
                    <Nav.Link href="/maindish" >Үндсэн хоол
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link eventKey="link-1">Салад ба зууш</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link eventKey="link-2">Амттан</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-2">
                    <Nav.Link eventKey="link-3">Хямдралтай</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}
export default Submenu