import React from "react";
import styled from "styled-components";
import WeatherSummaryBottom from "./WeatherSummaryBottom";
import WeatherSummaryTop from "./WeatherSummaryTop";
import { Theme } from "../../Theme";

function WeatherSummary() {
  return (
    <SummaryContainer $borderColor={Theme.ash}>
      <WeatherSummaryTop />
      <WeatherSummaryBottom />
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
