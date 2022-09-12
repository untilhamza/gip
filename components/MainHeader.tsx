import React from "react";
import { View, Header, Flex } from "@adobe/react-spectrum";
import { Navbar } from "react-bootstrap";
import Image from "next/image";
import styled from "styled-components";

//TODO: put in logo and accout user stuff

const MainHeader: React.FC = (): JSX.Element => {
  return (
    <Header gridArea="header">
      <View width="100%" backgroundColor="blue-600" position="fixed">
        <Navbar.Brand href="/home">
          <LogoContainer>
            <Image src={"/logo.svg"} alt="gip icon" width="50" height="50" />
          </LogoContainer>
        </Navbar.Brand>
      </View>
    </Header>
  );
};

export default MainHeader;

const LogoContainer = styled.div`
  padding-top: 10px;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(272deg)
      brightness(108%) contrast(103%);
  }
`;
