// 'use strict';

// const messagesWrapper = document.querySelector('.js-messages-wrapper');

// const handleMessageClick = event => {
//   if (!event.target.classList.contains('message__close-btn')) {
//     return;
//   }

//   const messageEl = event.target.parentElement;

//   messageEl.remove();
// };

// messagesWrapper.addEventListener('click', handleMessageClick);

const messageEl = document.querySelector('li');

messageEl.dataset.legs = 4;

console.log(messageEl.dataset);
