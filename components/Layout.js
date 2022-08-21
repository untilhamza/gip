import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <MainLayout className="">{children}</MainLayout>;
};

export default Layout;

const MainLayout = styled.div`
  max-width: 40rem;
  margin: 4rem auto;
`;
