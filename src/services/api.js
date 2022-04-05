import axios from "axios";

const api = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const getWeatherData = ({ query, id }) => {
  return new Promise(async (res, rej) => {
    try {
      const { data } = await axios.get(
        `
https://api.openweathermap.org/data/2.5/${query}?id=${id}&appid=${api}&units=metric`
      );
      res(data);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

// api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}
