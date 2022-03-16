import React, { useState, useEffect } from "react";
import Typography from "../commons/Typography";
import DropDown from "../dropDown/DropDown";
import Header from "../header/Header";
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
  return <WeatherSummary />;
  return (
    <>
      <Header />
      <Typography>Glossary...</Typography>
      <DropDown onChange={(value) => cityFilterHandler(value)} />
      <WeatherSummary />
    </>
  );
}

export default Glossary;
