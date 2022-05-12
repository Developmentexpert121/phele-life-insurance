import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Container, Navbar, Nav, FormControl, Form, NavDropdown } from "react-bootstrap";
import logo from './../../assets/logo.png';
import './../../assets/styles/common.css';



const MyNavbar = () => {
  return (
    <>
      <Navbar className="py-lg-4 navbar-container d-flex justify-content-around" style={{height:"8rem"}} bg="light" expand="lg" variant="light">
        {/* <Container className=""> */}

        <Navbar.Brand to="/"> <img src={logo}></img> </Navbar.Brand>

          {/* <LinkContainer to="/" className="d-flex flex-column ">
            <Navbar.Brand to="/"> <img src={logo}></img> </Navbar.Brand>
          </LinkContainer> */}


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="bg-light justify-content-end ps-3">

            <Form className="h-100 ">
              <FormControl type="search" placeholder="Search" className="me-2" style={{backgroundColor :'#dbe3ee', borderRadius:"40px",width:"50%" }} aria-label="Search" />

              <Nav className="nav" style={{fontWeight: "bold"}} activeKey="/home">
                <NavDropdown title="Why Life Insurance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/what-is-life-lnsurance">Why Life Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="/who-needs-life-insurance">Who is it for?</NavDropdown.Item>
                  <NavDropdown.Item href="/faq">Commanly Asked Question</NavDropdown.Item>
                  <NavDropdown.Item href="/form">Form</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="How it works" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/getting-started">Getting Started</NavDropdown.Item>
                  <NavDropdown.Item href="/how-claim-works">How claim works?</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Knowledge Center" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/insurance-library">Insurance library</NavDropdown.Item>
                  <NavDropdown.Item href="/glossary">Glossary</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="About Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">About IDAI</NavDropdown.Item>
                  <NavDropdown.Item href="/about-life-insurance-council">About Life Insurance Counsil</NavDropdown.Item>
                  <NavDropdown.Item href="/insurance-companies">Life Insurance Companies</NavDropdown.Item>
                  <NavDropdown.Item href="/news-media">News & Media</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Form>
          </Navbar.Collapse>

        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default MyNavbar;
