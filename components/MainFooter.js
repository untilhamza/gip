import React from "react";
import { View } from "@adobe/react-spectrum";

const MainFooter = () => {
  return (
    <View
      backgroundColor="seafoam-600"
      gridArea="footer"
      isHidden={{ base: true, M: false }}
    />
  );
};

export default MainFooter;
