import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gipIcon from "/public/logo.svg";
import { View, Flex } from "@adobe/react-spectrum";

const MainNav = () => {
  return (
    <View backgroundColor="blue-600" gridArea="nav">
      <Flex
        direction={{ base: "row", M: "column" }}
        gap="size-100"
        margin="size-100"
      >
        {[
          { navItem: "Reports", icon: "" },
          { navItem: "Members", icon: "" },
          { navItem: "Attendance", icon: "" },
          { navItem: "Resources", icon: "" },
          { navItem: "Settings", icon: "" },
          { navItem: "Signout", icon: "" },
        ].map((item) => (
          <View
            backgroundColor="static-gray-50"
            height="size-350"
            minWidth="size-900"
            key={item.navItem}
          >
            <Nav.Link href={`#${item.navItem}`}>{item.navItem}</Nav.Link>
          </View>
        ))}
      </Flex>
    </View>
  );
};

export default MainNav;
{
  /* <Container>
  <Navbar.Brand href="#home">
    <div className="navbar-brand ms-md-5">
      <img src={"/logo.svg"} alt="gip icon" className="logo-image" />
    </div>
  </Navbar.Brand>
  <Nav className="ms-auto"></Nav>
</Container>; */
}
