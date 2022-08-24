import React from "react";
import { View, Header, Flex } from "@adobe/react-spectrum";
import { Navbar } from "react-bootstrap";

// put in logo and accout user stuff

const MainHeader = () => {
  return (
    <Header backgroundColor="" gridArea="header">
      <View
        width="100%"
        backgroundColor="negative"
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        position="fixed"
      >
        <Navbar.Brand href="#home">
          <div className="ms-5">
            <img src={"/logo.svg"} alt="gip icon" className="logo-image" />
          </div>
        </Navbar.Brand>
      </View>
    </Header>
  );
};

export default MainHeader;
