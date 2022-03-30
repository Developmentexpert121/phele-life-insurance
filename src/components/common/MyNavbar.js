import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Container, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import logo from './../../assets/logo.png';
import './../../assets/styles/common.css';

const MyNavbar = () => {
  return (
    <>
      <Navbar className="py-lg-4 navbar-container" bg="light" expand="lg" variant="light">
        <Container className="d-flex flex-row flex-wrap">
          <LinkContainer to="/" className="d-flex flex-column ">
            <Navbar.Brand to="/">
              <img src={logo}></img>
            </Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link>Faq</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse> */}
          <Form className="h-100 ">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Nav className="align-items-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Why Life Insurance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">How It Works</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Knowledge Center</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  About Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
