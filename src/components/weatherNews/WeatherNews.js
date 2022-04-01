import React from "react";
import styled from "styled-components";
import WeatherForecast from "../weatherForecast/WeatherForecast";
import CurrentWeather from "../currentWeather/CurrentWeather";

function WeatherNews({ currentWeatherData, weatherForecastData }) {
  return (
    <Main>
      <WeatherNewsContainer>
        <CurrentWeather currentWeather={currentWeatherData} />
        <WeatherForecast forecastList={weatherForecastData} />
      </WeatherNewsContainer>
    </Main>
  );
}

export default WeatherNews;

const Main = styled.div`
  width: 90%;
  display: flex;
  margin: 15px auto;
`;

const WeatherNewsContainer = styled.div`
  width: 90%;
  max-width: 430px;
`;
