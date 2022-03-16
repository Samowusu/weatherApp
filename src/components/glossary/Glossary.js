import React, { useState, useEffect } from "react";
import Typography from "../commons/Typography";
import DropDown from "../dropDown/DropDown";
import Header from "../header/Header";
import WeatherDetailCard from "../weatherDetails/WeatherDetailCard";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherNews from "../weatherNews/WeatherNews";
import WeatherSummary from "../weatherSummary/WeatherSummary";

function Glossary() {
  const [filteredCity, setFilteredCity] = useState(null);

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
      <Typography>Glossary...</Typography>
      <WeatherDetails />
      <WeatherDetailCard />
      <WeatherSummary />

      <DropDown onChange={(value) => cityFilterHandler(value)} />
      <WeatherNews />
    </>
  );
}

export default Glossary;
