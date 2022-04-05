import React, { useState, useEffect } from "react";
import DropDown from "./components/dropDown/DropDown";
import Header from "./components/header/Header";
import WeatherNews, { Main } from "./components/weatherNews/WeatherNews";
import { CircularProgress } from "@material-ui/core";

import { getWeatherData } from "./services/api";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentWeatherState, setCurrentWeatherState] = useState([]);
  const [weatherForecastState, setWeatherForecastState] = useState([]);
  const [weatherDataState, setWeatherDataState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCitiesState, setFilteredCitiesState] = useState([]);

  const cityIDs = [
    { id: 634963 },
    { id: 655195 },
    { id: 650225 },
    { id: 660129 },
  ];

  //CURRENT WEATHER DATA FETCHING
  useEffect(() => {
    (async function () {
      let currentWeatherArray = [];
      const response = await Promise.all(
        cityIDs.map((city) => {
          return getWeatherData({
            query: "weather",
            id: city.id,
          });
        })
      );
      currentWeatherArray.push(...response);

      setCurrentWeatherState(currentWeatherArray);
    })();
  }, []);

  //WEATHER FORECAST DATA FETCHING
  useEffect(() => {
    (async function () {
      let weatherForecastArray = [];
      const response = await Promise.all(
        cityIDs.map((city) => {
          return getWeatherData({
            id: city.id,
            query: "forecast",
          });
        })
      );
      const responseList = response.map((res) => res.list);
      responseList.forEach((listItem) => {
        const updatedList = listItem.splice(0, 5);
        weatherForecastArray.push(updatedList);
      });
      setWeatherForecastState(weatherForecastArray);
    })();
  }, []);

  useEffect(() => {
    if (
      currentWeatherState.length > 0 &&
      weatherForecastState.length > 0 &&
      weatherDataState.length > 0
    )
      setIsLoading(false);
  }, [currentWeatherState, weatherForecastState, weatherDataState]);

  //LOGIC FOR CREATING AN ARRAY WITH BOTH CURRENT AND FORECAST WEATHER DATA
  useEffect(() => {
    let currentAndForecastData = [];
    for (let i = 0; i < currentWeatherState.length; i++) {
      currentAndForecastData.push([
        currentWeatherState[i],
        weatherForecastState[i],
      ]);
    }
    setWeatherDataState(currentAndForecastData);
  }, [currentWeatherState, weatherForecastState]);

  //CITY FILTERING LOGIC
  useEffect(() => {
    const filteredCities = weatherDataState?.filter(
      (city) => city[0].name === selectedCity
    );
    if (filteredCities.length === 0) {
      setFilteredCitiesState(weatherDataState);
    } else {
      setFilteredCitiesState(filteredCities);
    }
  }, [weatherDataState, selectedCity]);

  //CITY FILTER EVENT HANDLER
  const cityFilterHandler = (value) => {
    setSelectedCity(value);
  };

  return (
    <>
      <Header />

      <DropDown onChange={(value) => cityFilterHandler(value)} />
      <Main>
        {isLoading && <CircularProgress size={"5rem"} />}
        {!isLoading &&
          filteredCitiesState?.map((weather, index) => {
            return (
              <WeatherNews
                currentWeatherData={weather[0]}
                key={index}
                weatherForecastData={weather[1]}
              />
            );
          })}
      </Main>
    </>
  );
}

export default App;
