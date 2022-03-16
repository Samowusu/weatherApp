import React from "react";
import styled from "styled-components";
import CloudIcon from "../../assets/svgs/CloudIcon";
import Typography from "../commons/Typography";

function WeatherSummaryTop() {
  return (
    <WeatherSummaryTopContainer>
      <TextContainer>
        <Typography fontSize={"xl"} color="black" textAlign={"start"}>
          Helsinki
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"start"}>
          Scattered clouds
        </Typography>
      </TextContainer>
      <WeatherContainer>
        <CloudIcon />
        <Typography fontSize={"xxxl"} color="black" marginLeft={"10px"}>
          0 ° C
        </Typography>
      </WeatherContainer>
    </WeatherSummaryTopContainer>
  );
}

export default WeatherSummaryTop;

const WeatherSummaryTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
`;

const WeatherContainer = styled.div`
  display: flex;
  width: 50%;
`;
