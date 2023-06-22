'use strict';

/*
 * try/catch
 * Помилки фази інтерпретації обробити не можна, лише помилки фази виконання
 * Об'єкт помилки
 * try/catch працює ЛИШЕ з синхронним кодом
 * Обробка помилок в асинхронному коді
 */

// console.log('Start');

// let number = 5;

// try {
//   number = 10;

//   console.log('Success');
// } catch (err) {
//   console.log(err);

//   console.log('Failure');
// }

// console.log('Finish');

// 2

// console.log('Start');

// try {
//   setTimeout(() => {
//     const number = 5;

//     number = 10;
//   }, 1000);
// } catch {
//   console.log('Failure');
// }

// console.log('Finish');

// 3

// console.log('Start');

// setTimeout(() => {
//   try {
//     const number = 5;

//     number = 10;
//   } catch {
//     console.log('Failure');
//   }
// }, 1000);

// console.log('Finish');
