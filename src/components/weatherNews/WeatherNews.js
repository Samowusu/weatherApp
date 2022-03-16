import React from "react";
import styled from "styled-components";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherSummary from "../weatherSummary/WeatherSummary";

function WeatherNews({ weatherSummaryData, weatherDetailsData }) {
  return (
    <Main>
      <WeatherNewsContainer>
        <WeatherSummary summaryData={weatherSummaryData} />
        <WeatherDetails weatherList={weatherDetailsData} />
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
