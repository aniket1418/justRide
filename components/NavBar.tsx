import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import style from '../styles/ComponentStyles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const NavbarComponent = () => {
    return (
        <>
            <div className={style.navbarSection}>
                <Navbar collapseOnSelect expand="lg" className={style.navbar}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link href="/">
                                <Image src="/images/brandLogo.png" width="100" height="40" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/" className={style.navlink} style={{color:"black"}}>Home</Nav.Link>
                                <Nav.Link href="/about"  className={style.navlink} style={{color:"black"}}>About Us</Nav.Link>
                                <Nav.Link href="/joinus"  className={style.navlink} style={{color:"black"}}>Solutions</Nav.Link>
                                <Nav.Link href="/contactus"  className={style.navlink} style={{color:"black"}}>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarComponent;




