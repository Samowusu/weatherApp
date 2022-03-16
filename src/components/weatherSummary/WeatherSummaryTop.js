import React from "react";
import styled from "styled-components";
import CloudIcon from "../../assets/svgs/CloudIcon";
import Typography from "../commons/Typography";

function WeatherSummaryTop() {
  return (
    <WeatherSummaryContainer>
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
    </WeatherSummaryContainer>
  );
}

export default WeatherSummaryTop;

const WeatherSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherContainer = styled.div`
  display: flex;
`;
