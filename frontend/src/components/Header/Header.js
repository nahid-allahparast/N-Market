import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar className="bg-color" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand >N Market</Navbar.Brand>
            </LinkContainer>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link >
                  <i className="fa fa-shopping-cart"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/account">
                <Nav.Link >
                  <i className="fa fa-user"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
