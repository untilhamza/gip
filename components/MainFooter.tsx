import React from "react";
import { View, Footer } from "@adobe/react-spectrum";

const MainFooter = () => {
  return (
    <View
      backgroundColor="seafoam-600"
      gridArea="footer"
      isHidden={{ base: true, M: false }}
      paddingStart="size-400"
    >
      <Footer>© All rights reserved.</Footer>
    </View>
  );
};

export default MainFooter;
