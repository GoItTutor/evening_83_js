'use strict';

/*
 * async/await
 * асинхронна (async) функція Завжди повертає проміс.
 * await змушує функцію чекати виконання промісу.
 * await не можна використовувати поза асинхронними функціями.
 * try/catch для відлову помилок
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const showGreeting = async username => {
//   console.log(`Hello, ${username}!`);

//   return username;
// };

// console.log('Start');

// console.log(showGreeting('Andrii'));

// console.log('Finish');

// const getSum = async (...args) => args.reduce((acc, el) => acc + el);

// getSum(1, 5).then(console.log).catch(console.warn);

// console.log(getSum(1, 5));

//? TASK 01
// Перепиши функцію на синтаксис async/await

// usual (then/catch)

// const loadPosts = url => {
//   return fetch(url).then(postsResponse => {
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   });
// };

// async/await

// const buttonEl = document.querySelector('button');

// const fetchPosts = async url => {
//   const postsResponse = await fetch(url);

//   if (!postsResponse.ok) {
//     throw new Error(postsResponse.status);
//   }

//   return await postsResponse.json();
// };

// const showPosts = async () => {
//   console.log(`start`);

//   try {
//     console.log(await fetchPosts(`${BASE_URL}/pos42424ts`));
//   } catch (e) {
//     console.warn(e);
//   }

//   console.log(`finish`);
// };

// const fetchPosts = async url => {
//   try {
//     const postsResponse = await fetch(url);

//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   } catch (e) {
//     throw e;
//   }
// };

// const showPosts = async () => {
//   console.log(`start`);

//   try {
//     console.log(await fetchPosts(`${BASE_URL}/posts`));
//   } catch (e) {
//     console.warn(e);
//   }

//   console.log(`finish`);
// };

// buttonEl.addEventListener('click', showPosts);

// loadPosts(`${BASE_URL}/posts`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

async function func() {
  try {
    console.log(await wait());
  } catch (e) {
    console.warn(e);
  } finally {
    console.log('Finish!');
  }
  // ...що тут написати?
  // щоб викликати wait() та дочекатися результату "10" від async–функції
}

func();
