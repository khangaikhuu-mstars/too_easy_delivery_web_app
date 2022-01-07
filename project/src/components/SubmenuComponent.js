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
                        <NavLink to='/menu/main' className="me-2 menuu" >Үндсэн хоол</NavLink>
                        <NavLink to="/menu/saladAndDesert" className="mx-2  menuu">Салад ба зууш</NavLink>
                        <NavLink to="/menu/desert" className="mx-2 menuu">Амттан</NavLink>
                        <NavLink to="/menu/discountProduct" className="ms-2 menuu">Хямдралтай</NavLink>
                    </Nav>
                </Container>
            </div>

        </div>


    )
}

export default Submenu;