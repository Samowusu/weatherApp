import React from "react";
import styled from "styled-components";
import WeatherForecast from "../weatherForecast/WeatherForecast";
import CurrentWeather from "../currentWeather/CurrentWeather";

function WeatherNews({ currentWeatherData, weatherForecastData }) {
  return (
    <WeatherNewsContainer>
      <CurrentWeather currentWeather={currentWeatherData} />
      <WeatherForecast forecastList={weatherForecastData} />
    </WeatherNewsContainer>
  );
}

export default WeatherNews;

export const Main = styled.div`
  width: 90%;
  max-width: 2000px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 15px auto;
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
  @media (min-width: 1500px) {
    justify-content: flex-start;
  }
`;

const WeatherNewsContainer = styled.div`
  width: 100%;
  max-width: 430px;
  margin-bottom: 20px;
  margin-right: 20px;
  @media (max-width: 425px) {
    margin-right: 0;
  }
`;
