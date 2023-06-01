'use strict';

// import { division as divisionFunc, add } from './math';

// console.log(divisionFunc(12, 10));

// console.log(add(5, 2));

// import functionF, { add, division, multi, sub } from './math';

// functionF(1, 5);

// import * as Functios from './math';

// console.log(Functios);

// JS OBJECT NOTATION

// const user = {
//   firstName: 'Scott',
//   lastName: 'Huiston',
//   age: 20,
//   gender: 'male',

//   showName() {
//     console.log(this.firstName);
//   },

//   isAdmin: [],
// };

// const userJSON = JSON.stringify(user);

// console.log(userJSON);

// const userJS = JSON.parse(userJSON);

// console.log(userJS);

// const result = JSON.parse('"Hello, user!"');

// console.log(result);

// let constant = 5;

// try {
//   constant = 10;
// } catch (error) {
//   console.log(error);
// }

// console.log(constant);

// const JsonString = '"Andrii"';

// let jsEntity = null;

// try {
//   jsEntity = JSON.parse(JsonString);
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log(jsEntity);
// }

// const user = 42;

// localStorage.setItem('luckyNumber', JSON.stringify(618));

// localStorage.setItem('userOleksii', JSON.stringify(user));

// console.log(JSON.parse(localStorage.getItem('userOleksii')));

// localStorage.clear();

// localStorage.removeItem('userOleksii');

const inputEl = document.querySelector('input');
const outerHtmlEl = document.querySelector('#html');

inputEl.addEventListener(`input`, ({ target: { value } }) => {
  outerHtmlEl.innerHTML = value;
});
