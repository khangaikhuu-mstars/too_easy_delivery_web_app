import React from "react";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Submenu() {
    return (
        <div>
            <div>
                <Container>
                    <Nav variant="pills" className="submenu text-decoration-none" defaultActiveKey="/home">
                        <NavLink to='/main' className="me-2 menuu" eventKey='link-1'>Үндсэн хоол</NavLink>
                        <NavLink to="/main/saladAndDesert" className="mx-2  menuu" eventKey="link-2">Салад ба зууш</NavLink>
                        <NavLink to="/main/desert" className="mx-2 menuu" eventKey="link-3">Амттан</NavLink>
                        <NavLink to="/main/discountProduct" className="ms-2 menuu" eventKey="link-4">Хямдралтай</NavLink>
                    </Nav>
                </Container>
            </div>

        </div>


    )
}

export default Submenu;