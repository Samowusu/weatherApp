import React from "react";
import styled from "styled-components";

import WeatherSummaryTop from "./WeatherSummaryTop";

function WeatherSummary() {
  return (
    <SummaryContainer>
      <WeatherSummaryTop />
    </SummaryContainer>
  );
}

export default WeatherSummary;

const SummaryContainer = styled.div`
  width: 90%;
  max-width: 430px;
  border: 1px solid red;
  margin: 0 auto;
  padding: 15px 1rem 10px;
`;
