import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./styles.css";

const NavBarComp = () => {
    return <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><div className="logo-container">
            <div className="logo-purple">
                EcoSolve
            </div> AI
        </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" ><div className="navbar-text">Home</div></Nav.Link>
          <Nav.Link href="#link"><div className="navbar-text">Instructions</div></Nav.Link>
          <Nav.Link href="#link"><div className="navbar-text">About Us</div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavBarComp;