import React from "react";
import { View, Header } from "@adobe/react-spectrum";
import { Navbar } from "react-bootstrap";

// put in logo and accout user stuff

const MainHeader = () => {
  return (
    <Header backgroundColor="" gridArea="header">
      <Navbar.Brand href="#home">
        <div className="navbar-brand ms-md-5">
          <img src={"/logo.svg"} alt="gip icon" className="logo-image" />
        </div>
      </Navbar.Brand>
    </Header>
  );
};

export default MainHeader;
