import React from "react";
import styled from "styled-components";
import WeatherForecastCard from "./WeatherForecastCard";

function WeatherForecast({ forecastList }) {
  return (
    <WeatherForecastContainer>
      {forecastList.map((weatherItem, index) => (
        <WeatherForecastCard
          key={index}
          time={weatherItem.time}
          temperature={weatherItem.temperature}
          humidity={weatherItem.humidity}
          wind={weatherItem.wind}
          precipitation={weatherItem.precipitation}
        />
      ))}
    </WeatherForecastContainer>
  );
}

export default WeatherForecast;

const WeatherForecastContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
