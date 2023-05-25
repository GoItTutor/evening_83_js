'use strict';

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputEl = document.querySelector('.search-input');
const outputErrorEl = document.querySelector('.output-error');
const countryCardEl = document.querySelector('.country-card');

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `<li class="country-card__item"><strong>Страна:</strong> ${name}</li>
     <li class="country-card__item"><strong>Столица:</strong> ${capital}</li>
     <li class="country-card__item"><strong>Население:</strong> ${population}</li>
     <li class="country-card__item"><strong>Площадь:</strong> ${area}км<sup>2</sup></li>`;
};

const handleInputCountryName = event => {
  const searchQuery = event.target.value.trim().toLowerCase();

  console.log(searchQuery);

  if (!searchQuery) {
    outputErrorEl.textContent = '';
    countryCardEl.innerHTML = '';

    return;
  }

  const foundCountry = countries.find(
    ({ name }) => name.toLowerCase() === searchQuery
  );

  if (!foundCountry) {
    outputErrorEl.textContent = 'Такої країни не знайдено';

    countryCardEl.innerHTML = '';

    return;
  }

  outputErrorEl.textContent = '';
  countryCardEl.innerHTML = createCountryCard(foundCountry);
};

searchInputEl.addEventListener(
  'input',
  _.debounce(handleInputCountryName, 700, { leading: true, trailing: true })
);
