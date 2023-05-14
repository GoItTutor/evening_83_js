"use strict";

// class User1 {
//   static #name = "Katya";

//   static get name() {
//     return User.#name;
//   }
// }

// console.log(User1.name);

// class User2 {
//   #showName() {
//     console.log("Olya");
//   }

//   get showName() {
//     return this.#showName;
//   }
// }

// const instance = new User2();

// instance.showName();

// const numbers = [1, 2, 3, 4, 5];

// debugger;

// const result = numbers.reduce((acc, el, index) => acc + el, 0);

// console.log(result);

// const objects = [
//   { total: 2 },
//   { total: 5 },
//   { total: 1 },
//   { total: 8 },
//   { total: 2 },
//   { total: 3 },
//   { total: 8 },
//   { total: 1 },
//   { total: 2 },
// ];

// to calculate what is the total
// const values = objects.reduce((allValues, obj) => {
//   allValues.push(obj.total);
//   return allValues;
// }, []);
// console.log(values);

// const getTotalValue = values.reduce((acc, currentValue) => {
//   return (acc += currentValue);
// }, 0);

// console.log(getTotalValue);

// const values = objects.reduce((acc, { total }) => acc + total, 0);

// console.log(values);

// let array = [
//   { age: 44, name: "Sam" },
//   { age: 22, name: "Jack" },
// ];

// // Написати функцію, яка вертатитме об'єкт obj = { 'Sam' : 44, 'Jack' : 22};

// const transformArrayToObject = (arr) =>
//   arr.reduce((acc, { name, age }) => {
//     acc[name] = age;

//     return acc;
//   }, {});

// const obj = transformArrayToObject(array);

// console.log(obj);

// const setInstance = new Set([1, 2, 3, 4, 5, 4, 4, 5, 5]);

// console.log(setInstance.delete(2));

// console.log(setInstance);

// const array = [1, 2, 3, 4, 5];

// delete array[1];

// console.log(array);

// const VALID_STATUSES = new Set(["SUCCESS", "FINAL", "DONE"]);

// const people = [
//   { name: "Max", age: 20, status: "IN_PROGRESS" },
//   { name: "Sam", age: 21, status: "DONE" },
//   { name: "Dan", age: 30, status: "SUCCESS" },
// ];

// Потрібно отримати  ['Sam', 'Dan']. Розв'язання видає правильний резльтат.

// const peopleWithValidStatus = people
//   .filter((person) => VALID_STATUSES.has(person.status))
//   .map((person) => person.name);

// console.log(peopleWithValidStatus);

// const mapObj = new Map();
// mapObj.set("a", "1");
// mapObj.set("s", "25");
// mapObj.set("b", "33");
// mapObj.set("c", "15");

// console.log(mapObj.set(13, { isLucky: false }));

// console.log(mapObj.keys());

// const user = { name: "Vika", age: 22 };

// const { age, ...newUser } = user;

// console.log(newUser);

// let counter = 0;

// const increaseCounterGenerator = () => {
//   let counter = 0;

//   return () => ++counter;
// };

// const counter1 = increaseCounterGenerator();

// const counter2 = increaseCounterGenerator();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());

// function showUserName() {
//   console.log(this.name);
// }

// const user = { name: "Anya", showUserName };

// user.showUserName();
// user.showUserName();

// const bindedFunc = showUserName.bind(user).bind({ name: "Alina" });

// showUserName();

// bindedFunc();

// const slugify = (title) => title.toLowerCase().split(" ").join("-");

// console.log(slugify("Hi from GoIt with Andrii"));

//" Чому ми не можемо одразу розділити за допомогою split('-')?

// const arr = [1, 2, 3, 4];

// let total = 0;
// let index = 0;

// const countNumbers = (arr) => {
//   const arrayEl = arr[index];

//   if (arrayEl === undefined) {
//     return total;
//   }

//   total += arrayEl;
//   index += 1;

//   countNumbers(arr);
// };

// console.log(countNumbers(arr));

// const HOF = (context, callback) => {
//   callback.call(context);
// };

// function callback() {
//   console.log(this.price);
// }

// HOF({ price: 2000 }, callback);

// class User {
//   constructor({ name, age }) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Admin extends User {
//   constructor({ name, age, isCanModerate }) {
//     super({ name, age });

//     this.isCanModerate = isCanModerate;
//   }

//   sayHi() {
//     console.log(`Hello, my name is ${this.name} and i am administrator`);
//   }
// }

// const user = new User({ name: "Andrii", age: 30 });

// console.log(user);

// const user = new Admin({ name: "Andrii", age: 30, isCanModerate: true });
// console.log(user);

// user.sayHi();

// function Calculator() {}

// Calculator.prototype.calculate = function (str) {
//   if (typeof str !== "string") {
//     throw new Error("Переданий аргумент не є рядком");
//   }

//   const [firstNumber, operator, secondNumber] = str.split(" ");

//   return Calculator.prototype[operator](+firstNumber, +secondNumber);
// };

// Calculator.prototype.addMethod = function (name, func) {
//   Calculator.prototype[name] = func;
// };

// const professionCalc = new Calculator();

// professionCalc.addMethod("+", (a, b) => a + b);
// professionCalc.addMethod("-", (a, b) => a - b);
// professionCalc.addMethod("*", (a, b) => a * b);
// professionCalc.addMethod("/", (a, b) => a / b);
// professionCalc.addMethod("**", (a, b) => a ** b);

// console.log(professionCalc.calculate("8 / 4"));
