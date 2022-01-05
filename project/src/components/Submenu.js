import React from "react";
import { Nav, Route } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Submenu({}) {
    return (
        <div>
      <div>
        <Container>
            <Nav variant="pills" defaultActiveKey="/home" className="submenu">
                <Nav.Item className="me-2">
                    <Nav.Link href='/main/main'>Үндсэн хоол
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link href="/main/saladAndDesert">Салад ба зууш</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                    <Nav.Link href="/main/saladAndDesert">Амттан</Nav.Link>
                </Nav.Item>
                <Nav.Item className="ms-2">
                    <Nav.Link href="/main/discountProduct">Хямдралтай</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
        </div>
     
        </div>
  

    )
}
export default Submenu