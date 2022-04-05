import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";
import {
  TextContainer,
  IconContainer,
} from "../currentWeather/CurrentWeatherTop";
import { Theme } from "../../Theme";
import SunIcon from "../../assets/svgs/SunIcon";

WeatherForecastCard.defaultProps = {
  time: "15:00",
  temperature: "-1",
  wind: "2.1 ",
  humidity: "5 ",
  precipitation: "0",
};

function WeatherForecastCard({
  time,
  temperature,
  wind,
  humidity,
  precipitation,
  icon,
}) {
  return (
    <ForecastCard $borderColor={Theme.ash}>
      <Typography fontSize={"m"} color="grey" marginBottom={"5px"}>
        {time}
      </Typography>
      <IconContainer>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="cloud"
        />
      </IconContainer>
      <Typography
        fontSize={"l"}
        color="black"
        marginTop={"5px"}
        marginBottom="5px"
      >
        {temperature}°C
      </Typography>
      <TextContainer $backgroundColor={Theme.lightBlue} $width={"100%"}>
        <Typography
          fontSize={"s"}
          color="grey"
          marginBottom={"3px"}
          marginTop={"5px"}
        >
          {wind} m/s
        </Typography>
        <Typography fontSize={"s"} color="grey" marginBottom={"3px"}>
          {humidity} %
        </Typography>
        <Typography fontSize={"s"} color="grey" marginBottom={"5px"}>
          {precipitation}mm
        </Typography>
      </TextContainer>
    </ForecastCard>
  );
}

export default WeatherForecastCard;

const ForecastCard = styled.div`
  width: 18%;
  max-width: 75px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
  border: 1px solid ${(props) => props.$borderColor ?? "none"};
  border-radius: 4px;
`;
