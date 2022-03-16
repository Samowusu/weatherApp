import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";
import { TextContainer } from "./WeatherSummaryTop";

function WeatherSummaryBottom() {
  return (
    <WeatherSummaryBottomContainer>
      <TextContainer>
        <Typography fontSize={"l"} color="black" textAlign={"start"}>
          May 2nd
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"start"}>
          11:53
        </Typography>
      </TextContainer>
      <TextContainer>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Wind: 5.1 m/s
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Humidity: 86 %
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Precipitation(3h): 5 mm
        </Typography>
      </TextContainer>
    </WeatherSummaryBottomContainer>
  );
}

export default WeatherSummaryBottom;

const WeatherSummaryBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 50px;
`;
