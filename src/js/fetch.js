'use strict';

// https://habr.com/ru/post/495698/

// https://jsonplaceholder.typicode.com/

fetch(
  'https://jsonplaceholder.typicode.com/users?_limit=100&_sort=username&username_like=^M'
)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    console.log('Запит відбувся успішно');

    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.warn(err);
  });
