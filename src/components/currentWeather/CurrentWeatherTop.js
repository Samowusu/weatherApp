import React from "react";
import styled from "styled-components";
import Typography from "../commons/Typography";

CurrentWeatherTop.defaultProps = {
  city: "Helsinki",
  description: "Scattered clouds",
  temperature: "0 ° C",
};
function CurrentWeatherTop({ city, description, temperature, icon }) {
  return (
    <CurrentWeatherTopContainer>
      <TextContainer>
        <Typography fontSize={"xl"} color="black" textAlign={"start"}>
          {city}
        </Typography>
        <Typography fontSize={"m"} color="grey" textAlign={"start"}>
          {description}
        </Typography>
      </TextContainer>
      <WeatherContainer>
        <IconContainer>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="cloud"
          />
        </IconContainer>
        <Typography fontSize={"xxxl"} color="black" marginLeft={"10px"}>
          {temperature}°C
        </Typography>
      </WeatherContainer>
    </CurrentWeatherTopContainer>
  );
}

export default CurrentWeatherTop;

const CurrentWeatherTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor ?? "transparent"};
  width: ${(props) => props.$width ?? "none"};
`;

const WeatherContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
`;
