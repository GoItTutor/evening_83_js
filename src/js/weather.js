// https://www.weatherbit.io/api

'use strict';

import { fetchWeatherDataByCityName } from './weather-api';

import weatherCardTemplate from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${String(date.getHours()).padStart(2, 0)}:${String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const handleSearchWeather = event => {
  event.preventDefault();

  // console.log(event.target.elements.user_country);
  const searchCityName = event.target.firstElementChild.value.trim();

  event.target.firstElementChild.value = '';

  if (searchCityName === '') {
    return;
  }

  fetchWeatherDataByCityName(searchCityName)
    .then(data => {
      const enhancedData = {
        ...data,
        sys: {
          ...data.sys,
          sunrise: convertSecondsToHoursAndMinutes(data.sys.sunrise),
          sunset: convertSecondsToHoursAndMinutes(data.sys.sunset),
        },
      };

      weatherWrapperEl.innerHTML = weatherCardTemplate(enhancedData);
    })
    .catch(err => {
      console.warn(err);
    });
};

weatherFormEl.addEventListener('submit', handleSearchWeather);
