import React from "react";
import styled from "styled-components";
import WeatherDetailCard from "./WeatherDetailCard";

function WeatherDetails() {
  return (
    <WeatherDetailsContainer>
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
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
