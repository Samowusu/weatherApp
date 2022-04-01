import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";
import { TextContainer } from "./CurrentWeatherTop";

CurrentWeatherBottom.defaultProps = {
  date: "May 2nd",
  time: "11:53",
  wind: "5.1 m/s",
  humidity: "86 %",
  precipitation: "5 ",
};
function CurrentWeatherBottom({ date, time, wind, humidity, precipitation }) {
  return (
    <CurrentWeatherBottomContainer>
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
          Wind: {wind} m/s
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Humidity: {humidity}%
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"end"}>
          Precipitation(3h): {precipitation}mm
        </Typography>
      </TextContainer>
    </CurrentWeatherBottomContainer>
  );
}

export default CurrentWeatherBottom;

const CurrentWeatherBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 50px;
`;
