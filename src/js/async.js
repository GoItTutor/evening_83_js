'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

// Стек виклику функцій
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 5);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

// setTimeout(() => {
//   clearInterval(id);
// }, 5000);

// const id = setInterval(() => {
//   console.count();
// }, 1000);

// console.log(id);

// Очищення інтервалів і таймаутів clearInterval(intervalID), clearTimeout(timeoutID)
