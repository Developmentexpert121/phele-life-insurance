import React from 'react';
// import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

import {Container,Navbar, NavDropdown,Nav} from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <>
    <Navbar bg='dark' expand="lg" variant="dark">
        <Container>
        <LinkContainer to="/"><Navbar.Brand to="/">Logo</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>Faq</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar