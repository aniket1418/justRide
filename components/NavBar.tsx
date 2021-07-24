import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import style from '../styles/ComponentStyles/Navbar.module.scss'

const NavbarComponent = () => {
    return (
        <>
            <div className={style.navbarSection}>
                <Navbar collapseOnSelect expand="lg" className={style.navbar}>
                    <Container>
                        <Navbar.Brand href="#home">BRAND LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" className={style.navlink} style={{color:"black"}}>Home</Nav.Link>
                                <Nav.Link href="/about"  className={style.navlink} style={{color:"black"}}>About Us</Nav.Link>
                                <Nav.Link href="/joinus"  className={style.navlink} style={{color:"black"}}>Join Us</Nav.Link>
                                <Nav.Link href="#pricing"  className={style.navlink} style={{color:"black"}}>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarComponent;




