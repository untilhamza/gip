import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const GeneralPage: React.FC<Props> = ({ children }) => {
  return <Page>{children}</Page>;
};

export default GeneralPage;

const Page = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  overflow: auto;
  overflow: auto;
`;
