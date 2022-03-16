import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";
import { TextContainer } from "./WeatherSummaryTop";

WeatherSummaryBottom.defaultProps = {
  date: "May 2nd",
  time: "11:53",
  wind: "5.1 m/s",
  humidity: "86 %",
  precipitation: "5 mm",
};
function WeatherSummaryBottom({ date, time, wind, humidity, precipitation }) {
  return (
    <WeatherSummaryBottomContainer>
      <TextContainer>
        <Typography fontSize={"l"} color="black" textAlign={"start"}>
          {date}
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"start"}>
          {time}
        </Typography>
      </TextContainer>
      <TextContainer>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Wind: {wind}
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Humidity: {humidity}
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Precipitation(3h): {precipitation}
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
