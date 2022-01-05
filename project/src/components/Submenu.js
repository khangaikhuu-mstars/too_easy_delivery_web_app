import React from "react";
import { Nav, Route } from "react-bootstrap";
import { Container } from "react-bootstrap";
import MainDish from "./MainDish";

function Submenu({match}) {
    return (
        <div>
      <div>
        <Container>
            <Nav variant="pills" defaultActiveKey="/home" className="submenu">
                <Nav.Item className="me-2">
                    <Nav.Link href={`/menu/maindish`}>Үндсэн хоол
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link href="/">Салад ба зууш</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link eventKey="link-2">Амттан</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-2">
                    <Nav.Link eventKey="link-3">Хямдралтай</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
        </div>
     
        </div>
  

    )
}
export default Submenu