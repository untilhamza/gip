import React from "react";
import { View } from "@adobe/react-spectrum";

const TOC = () => {
  return (
    <View
      backgroundColor="magenta-600"
      gridArea="toc"
      minHeight="size-1000"
      isHidden={{ base: true, L: false }}
    />
  );
};

export default TOC;
