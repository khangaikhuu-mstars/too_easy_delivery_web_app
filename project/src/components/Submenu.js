import React from "react";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Submenu() {
    return (
        <div>
            <div>
                <Container>
                    <Nav variant="pills" defaultActiveKey="/home" className="submenu text-decoration-none">
                        <NavLink to='/main' className="me-2 menuu" >Үндсэн хоол</NavLink>
                        <NavLink to="/main/saladAndDesert" className="mx-2  menuu">Салад ба зууш</NavLink>
                        <NavLink to="/main/desert" className="mx-2 menuu">Амттан</NavLink>
                        <NavLink to="/main/discountProduct" className="ms-2 menuu">Хямдралтай</NavLink>
                    </Nav>
                </Container>
            </div>

        </div>


    )
}

export default Submenu;