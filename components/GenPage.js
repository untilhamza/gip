import React from "react";
import styled from "styled-components";

const GenPage = ({ children }) => {
  return <Page>{children}</Page>;
};

export default GenPage;

const Page = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  overflow: auto;
  height: 54rem;
  overflow: auto;
`;
