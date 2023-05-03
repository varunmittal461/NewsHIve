import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar expand="lg" collapseOnSelect className="navbar">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="brand-txt brand-lowercase brand">
                <span>News Hive</span>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/culture">
                  <Nav.Link className="nav-items">Culture</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sports">
                  <Nav.Link className="nav-items">Sports</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/politics">
                  <Nav.Link className="nav-items">Politics</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/lifestyle">
                  <Nav.Link className="nav-items">Lifestyle</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
