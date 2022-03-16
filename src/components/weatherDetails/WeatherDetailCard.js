import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";
import {
  TextContainer,
  IconContainer,
} from "../weatherSummary/WeatherSummaryTop";
import { Theme } from "../../Theme";
import SunIcon from "../../assets/svgs/SunIcon";

function WeatherDetailCard() {
  return (
    <DetailCard $borderColor={Theme.ash}>
      <Typography fontSize={"m"} color="grey" marginBottom={"5px"}>
        15:00
      </Typography>
      <IconContainer>
        <SunIcon />
      </IconContainer>
      <Typography
        fontSize={"l"}
        color="black"
        marginTop={"5px"}
        marginBottom="5px"
      >
        -1°C
      </Typography>
      <TextContainer $backgroundColor={Theme.lightBlue} $width={"100%"}>
        <Typography
          fontSize={"s"}
          color="grey"
          marginBottom={"3px"}
          marginTop={"5px"}
        >
          2.1 m/s
        </Typography>
        <Typography fontSize={"s"} color="grey" marginBottom={"3px"}>
          5 %
        </Typography>
        <Typography fontSize={"s"} color="grey" marginBottom={"5px"}>
          1 mm
        </Typography>
      </TextContainer>
    </DetailCard>
  );
}

export default WeatherDetailCard;

const DetailCard = styled.div`
  width: 18%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
  border: 1px solid ${(props) => props.$borderColor ?? "none"};
  border-radius: 4px;
`;
