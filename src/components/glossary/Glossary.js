import React, { useState, useEffect } from "react";
import Typography from "../commons/Typography";
import DropDown from "../dropDown/DropDown";
import Header from "../header/Header";
import WeatherForecastCard from "../weatherForecast/WeatherForecastCard";
import WeatherForecast from "../weatherForecast/WeatherForecast";
import WeatherNews from "../weatherNews/WeatherNews";
import WeatherSummary from "../currentWeather/CurrentWeather";

// Data
import { weatherData, currentWeather } from "../../Data";

function Glossary() {
  const [filteredCity, setFilteredCity] = useState(null);
  //   const [currentWeatherState, setCurrentWeatherState] = useState([])

  //   const coords = [{lat : 214, lng: 329},{lat : 214, lng: 329},{lat : 214, lng: 329},{lat : 214, lng: 329},]
  // {
  // coords.map((coord) =>
  //   const {data} = useHook({lat: coord.lat, lng: coord.lng})
  //   )}
  //   useEffect(() => {
  //     let weather = [];
  //     weather.push(dataBase);
  //     setCurrentWeatherState(weather)
  //   }, [dataBase])

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
      {currentWeather.map((weather, index) => (
        <WeatherNews
          currentWeatherData={weather}
          key={index}
          weatherForecastData={weatherData}
        />
      ))}
    </>
  );
}

export default Glossary;
