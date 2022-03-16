import React from "react";
import styled from "styled-components";
import WeatherDetailCard from "./WeatherDetailCard";

function WeatherDetails({ weatherList }) {
  return (
    <WeatherDetailsContainer>
      {weatherList.map((weatherItem, index) => (
        <WeatherDetailCard
          key={index}
          time={weatherItem.time}
          temperature={weatherItem.temperature}
          humidity={weatherItem.humidity}
          wind={weatherItem.wind}
          precipitation={weatherItem.precipitation}
        />
      ))}
    </WeatherDetailsContainer>
  );
}

export default WeatherDetails;

const WeatherDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
