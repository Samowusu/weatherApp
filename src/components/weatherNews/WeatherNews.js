import React from "react";
import styled from "styled-components";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherSummary from "../weatherSummary/WeatherSummary";

function WeatherNews() {
  return (
    <WeatherNewsContainer>
      <WeatherSummary />
      <WeatherDetails />
    </WeatherNewsContainer>
  );
}

export default WeatherNews;

const WeatherNewsContainer = styled.div`
  width: 90%;
  max-width: 430px;
  margin-left: 60px;
  margin-top: 20px;
`;
