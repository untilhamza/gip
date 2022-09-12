import React from "react";
import styled from "styled-components";
import { Grid, View, Flex } from "@adobe/react-spectrum";
import MainHeader from "./MainHeader";
import MainNav from "./MainNav";
import MainFooter from "./MainFooter";
import TOC from "./TOC";

interface Props {
  children?: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      areas={{
        base: ["header", "content", "nav"],
        M: ["header   header", "nav  content", "footer   footer"],
        L: [
          "header header  header",
          "nav    content toc",
          "footer footer  footer",
        ],
      }}
      columns={{
        base: ["1fr"],
        M: ["size-2000", "1fr"],
        L: ["size-3000", "1fr", "size-3000"],
      }}
      rows={{
        base: ["size-400", "1fr", "size-600"],
        M: ["size-600", "1fr", "size-300"],
      }}
      gap={{ base: "0", M: "0.5rem" }}
      minHeight="100vh"
      width="100vw"
    >
      <MainHeader />
      <MainNav />
      {/* main content */}
      <View
        backgroundColor="gray-50"
        gridArea="content"
        paddingY="size-200"
        paddingX="size-300"
      >
        {/*page component goes in here*/}
        {children}
      </View>
      <TOC />
      <MainFooter />
    </Grid>
  );
};

export default MainLayout;
