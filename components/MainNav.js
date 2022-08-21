import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gipIcon from "/public/logo.svg";

const MainNav = () => {
  return (
    <Navbar bg="dark" variant="dark" className="px-3 fixed-top nav-bar">
      <Container>
        <Navbar.Brand href="#home">
          <div className="navbar-brand ms-md-5">
            <img src={"/logo.svg"} alt="gip icon" className="logo-image" />
          </div>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
