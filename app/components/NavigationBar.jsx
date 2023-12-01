"use client"
import "@styles/nav.css"
import { slide as Menu } from 'react-burger-menu'
const NavigationBar = () => {
    const showSettings = (event) => {
        event.preventDefault();

    }
    return (
        // <Navbar variant="dark" expand="lg">
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="#home">INICIO</Nav.Link>
        //             <Nav.Link href="#link">PROXIMOS EVENTOS</Nav.Link>
        //             <Nav.Link href="#link">CONTACTO</Nav.Link>

        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <Menu customBurgerIcon={<img src="./logo.png" />} >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
    );
};

export default NavigationBar;