import React, { type FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header: FC = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <LinkContainer to={"/"}>
            <Nav.Link>View mode</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/settings"}>
            <Nav.Link>Settings</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
