import React from "react";
import { Text } from "./Typography-styled";

const fontSizeMapping = {
  xxxl: "26px",
  xxl: "23px",
  xl: " 19px",
  l: "15px",
  m: "13px",
  s: "10px",

  standard: "16px",
};

const fontColorMapping = {
  black: "#262626",
  grey: "#70757A",
};

function Typography({
  children,
  fontSize,
  color,
  lineHeight,
  textAlign,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
}) {
  return (
    <Text
      $fontSize={fontSize ? fontSizeMapping[fontSize] : "16px"}
      $color={color ? fontColorMapping[color] : "#262626"}
      $lineHeight={lineHeight}
      $textAlign={textAlign}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $marginTop={marginTop}
      $marginRight={marginRight}
    >
      {children}
    </Text>
  );
}

export default Typography;
