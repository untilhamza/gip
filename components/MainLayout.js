import React from "react";
import styled from "styled-components";
import { Grid, View, Flex } from "@adobe/react-spectrum";
import MainHeader from "./MainHeader";
import MainNav from "./MainNav";
import MainFooter from "./MainFooter";
import TOC from "./TOC";

const MainLayout = ({ children }) => {
  return (
    <Grid
      areas={{
        base: ["header", "content", "nav"],
        M: [
          "header   header",
          "nav      content",
          "nav      content",
          "nav      content",
          "nav      content",
          "footer   footer",
        ],
        L: [
          "header header  header",
          "nav    content toc",
          "nav    content toc",
          "nav    content toc",
          "nav    content toc",
          "nav    content toc",
          "footer footer  footer",
        ],
      }}
      columns={{
        M: ["size-2000", "1fr"],
        L: ["size-3000", "1fr", "size-3000"],
      }}
      rows={{
        base: ["size-600", "auto", "size-600"],
        M: ["size-600", "auto", "size-100"],
      }}
      gap="size-100"
      minHeight="calc(100% - size-0)"
    >
      <MainHeader />
      <MainNav />
      {/* main content */}
      <View
        backgroundColor="celery-600"
        gridArea="content"
        paddingY="size-200"
        paddingX="size-300"
      >
        {children}
      </View>
      <TOC />
      <MainFooter />
    </Grid>
  );
};

export default MainLayout;
