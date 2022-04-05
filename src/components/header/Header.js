import React from "react";
import styled from "styled-components";
import { Theme } from "../../Theme";
import Typography from "../commons/Typography";

function Header() {
  return (
    <>
      <HeaderTop $backgroundColor={Theme.blue} />
      <HeaderBottom $backgroundColor={Theme.white} $borderColor={Theme.ash}>
        <Typography fontSize={"xxl"} color="black">
          Säätutka
        </Typography>
      </HeaderBottom>
    </>
  );
}

export default Header;

const HeaderTop = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
`;

const HeaderBottom = styled.div`
  width: 100%;
  max-width: 2000px;
  @media (min-width: 2000px) {
    margin: 0 auto;
  }

  display: flex;
  justify-content: center;
  padding: 30px 0;
  border: 1px solid ${(props) => props.$borderColor ?? "black"};
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
`;
