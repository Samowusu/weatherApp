import axios from "axios";

const api = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export const getWeatherData = async ({ lat, lng }) => {
  return new Promise(async (res, rej) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api}`
      );
      res(data);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};
