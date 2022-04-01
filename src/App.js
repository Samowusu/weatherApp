import React, { useState, useEffect } from "react";
import DropDown from "./components/dropDown/DropDown";
import Header from "./components/header/Header";
import WeatherNews from "./components/weatherNews/WeatherNews";

// Data
import { weatherData, currentWeather } from "./Data";
import { getWeatherData } from "./services/api";

function App() {
  const [filteredCity, setFilteredCity] = useState(null);
  const [currentWeatherState, setCurrentWeatherState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const coords = [
    { lat: 62.1332752, lng: 25.0954831 },
    { lat: 61.6307819, lng: 23.2698994 },
    { lat: 62.9933927, lng: 26.5529307 },
    { lat: 60.2064642, lng: 24.3949373 },
  ];

  // useEffect(() => {
  //   let currentWeatherArray = [];
  //   coords.forEach((coord) => {
  //     getWeatherData({ lat: coord.lat, lng: coord.lng }).then((data) => {
  //       console.log(data);
  //       currentWeatherArray.push(data);
  //     });
  //   });
  //   console.log({ currentWeatherArray });
  // }, []);
  useEffect(() => {
    (async function () {
      let currentWeatherArray = [];
      const response = await Promise.all(
        coords.map((coord) => {
          return getWeatherData({ lat: coord.lat, lng: coord.lng });
        })
      );
      console.log({ response });
      currentWeatherArray.push(...response);
      console.log({ currentWeatherArray });

      setCurrentWeatherState(currentWeatherArray);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    console.log(filteredCity);
  }, [filteredCity]);

  const cityFilterHandler = (value) => {
    setFilteredCity(value);
    console.log("from glossary");
  };
  return (
    <>
      <Header />

      <DropDown onChange={(value) => cityFilterHandler(value)} />
      {!isLoading &&
        currentWeatherState.map((weather, index) => (
          <WeatherNews
            currentWeatherData={weather}
            key={index}
            weatherForecastData={weatherData}
          />
        ))}
    </>
  );
}

export default App;
