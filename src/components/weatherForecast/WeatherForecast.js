import React from "react";
import styled from "styled-components";
import WeatherForecastCard from "./WeatherForecastCard";

function WeatherForecast({ forecastList }) {
  return (
    <WeatherForecastContainer>
      {forecastList?.map((weatherItem, index) => {
        const date = weatherItem?.dt_txt?.split(" ");
        return (
          <WeatherForecastCard
            key={index}
            time={date[1]}
            temperature={weatherItem?.main?.temp}
            humidity={weatherItem?.main?.humidity}
            wind={weatherItem?.wind?.speed}
            precipitation={weatherItem?.rain?.["3h"]}
            icon={weatherItem?.weather[0].icon}
          />
        );
      })}
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
