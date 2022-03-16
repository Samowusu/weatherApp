import React from "react";
import styled from "styled-components";
import WeatherSummaryBottom from "./WeatherSummaryBottom";
import WeatherSummaryTop from "./WeatherSummaryTop";
import { Theme } from "../../Theme";

function WeatherSummary({ summaryData }) {
  return (
    <SummaryContainer $borderColor={Theme.ash}>
      {summaryData.map((weatherItem, index) => (
        <WeatherSummaryTop
          key={index}
          city={weatherItem.city}
          description={weatherItem.description}
          temperature={weatherItem.temperature}
        />
      ))}
      {summaryData.map((weatherItem, index) => (
        <WeatherSummaryBottom
          date={weatherItem.date}
          humidity={weatherItem.humidity}
          key={index}
          precipitation={weatherItem.precipitation}
          time={weatherItem.time}
          wind={weatherItem.wind}
        />
      ))}
    </SummaryContainer>
  );
}

export default WeatherSummary;

const SummaryContainer = styled.div`
  width: 100%;
  padding: 15px 1rem 10px;
  border: 1px solid ${(props) => props.$borderColor ?? "none"};
  border-radius: 4px;
`;
