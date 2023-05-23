'use strict';

const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.color = color;
  });
};

const handlePalletClick = event => {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const currentColor = event.target.dataset.color;

  const outputEl = event.target.firstElementChild;

  outputEl.textContent = currentColor;
};

paintElements();

palletEl.addEventListener('click', handlePalletClick);
