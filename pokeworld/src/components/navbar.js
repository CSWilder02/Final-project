import React from "react";
import { Container, NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from './logo.png';

function BasicNavbar() {
    return (
        <Navbar style={{position: 'fixed', width: '1481px', height: '100px', padding: '15px'}} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" ><img style={{width: '90px', paddingTop: '20px'}} src={logo} /></Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink  style={{color: 'white', marginLeft: '50px', textDecoration: 'none', paddingTop: '20px'}}  href="/">Landing</NavLink>
                    <NavLink  style={{color: 'white', marginLeft: '90px', textDecoration: 'none', paddingTop: '20px'}}  href="/compare">Compare</NavLink>
                    <NavLink  style={{color: 'white', marginLeft: '90px', textDecoration: 'none', paddingTop: '20px'}}  href="/time">Time</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BasicNavbar;