import React from "react";
import styled from "styled-components";
import CurrentWeatherBottom from "./CurrentWeatherBottom";
import CurrentWeatherTop from "./CurrentWeatherTop";
import moment from "moment";
import { Theme } from "../../Theme";

function CurrentWeather({ currentWeather }) {
  const collectionDate = moment(currentWeather?.dt).format("MMM Mo");
  const collectionTime = moment(currentWeather?.dt).format("LT");

  return (
    <CurrentWeatherContainer $borderColor={Theme.ash}>
      <CurrentWeatherTop
        city={currentWeather?.name}
        description={currentWeather?.weather[0].description}
        temperature={currentWeather?.main.temp}
        icon={currentWeather?.weather[0].icon}
      />

      <CurrentWeatherBottom
        date={collectionDate}
        humidity={currentWeather?.main.humidity}
        precipitation={currentWeather?.rain?.["3h"]}
        time={collectionTime}
        wind={currentWeather?.wind.speed}
      />
    </CurrentWeatherContainer>
  );
}

export default CurrentWeather;

const CurrentWeatherContainer = styled.div`
  width: 100%;
  padding: 15px 1rem 10px;
  border: 1px solid ${(props) => props.$borderColor ?? "none"};
  border-radius: 4px;
`;

// return (
//   <CurrentWeatherContainer $borderColor={Theme.ash}>
//     <CurrentWeatherTop
//       city={currentWeather.name}
//       description={currentWeather.weather[0].description}
//       temperature={currentWeather.main.temp}
//     />

//     <CurrentWeatherBottom
//       date={currentWeather.dt}
//       humidity={currentWeather.main.humidity}
//       precipitation={currentWeather?.precipitation}
//       time={currentWeather.timezone}
//       wind={currentWeather.wind.speed}
//     />
//   </CurrentWeatherContainer>
// );
