"use client"
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">INICIO</Nav.Link>
                    <Nav.Link href="#link">PROXIMOS EVENTOS</Nav.Link>
                    <Nav.Link href="#link">CONTACTO</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;