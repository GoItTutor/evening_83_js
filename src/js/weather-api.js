'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '95632b02f9162f375a368971925f5209';

export const fetchWeatherDataByCityName = cityName =>
  fetch(`${BASE_URL}?appid=${API_KEY}&lang=ua&units=metric&q=${cityName}`).then(
    res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    }
  );
