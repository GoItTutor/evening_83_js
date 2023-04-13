/*
  1. Приклади з областями видимості
*/

// const a = 5;

// {
//   // const a = 7;

//   {
//     // const a = 10;

//     console.log(a);
//   }
// }

// -------------------------------//
// let a = 10;

// if (true) {
//   const a = 5;
// }

// console.log(a);

// ------------------------------//
// const b = 10;

// if (true) {
//   let b = 5;
//   b = 15;

//   console.log(b);
// }

// console.log(b);

// ------------------------------//
// let c = 10;

// if (true) {
//   // let c = 100;
//   c = 1;

//   if (true) {
//     // let c = 25;
//     c = 15;
//   }
// }

// console.log(c);

// ------------------------------//

// const numbers = [1, 2, 3];

// let total = 0;

// for (const number of numbers) {
//   total += number;
//   console.log(total);
// }

// console.log(total);

/*
  2. Створення та види функцій

  - Призначення
  - Cигнатура функції (синтаксис)
  - Що таке параметр, а що таке аргумент?
  - Параметри по замовчуванню
  - Дериктива return
  - Всплиття function declaration
*/

// function declaretion

// function log(name = "Anonymous", age = 40) {
//   console.log(`Hi, ${name}, your age is ${age}`);
// }

// log();
// log("Borys", 20);
// log("Nadiya", 27);

// console.log(getSum(1, 5));

// function getSum(a, b) {
//   return a + b;
// }

// console.log(getSum(1, 5));

// const result = getSum(10, 15);

// console.log(result);

// function expression

// const getSum = function (a, b) {
//   return a + b;
// };

// console.log(getSum(1, 5));

// console.log(window);

// викликається тільки після оголошення

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

// function getSum() {
//   let total = 0;

//   for (let index = 0; index < arguments.length; index += 1) {
//     total += arguments[index];
//   }

//   // for (let value of arguments) {
//   //   total += value;
//   // }

//   return total;
// }

// const result = getSum(30, 40, 50);

// console.log(result);

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//   console.log("start foo");
//   console.log("end foo");
// }

// function boo() {
//   console.log("start boo");
//   foo();
//   console.log("end boo");
// }

// function doo() {
//   console.log("start boo");
//   foo();
//   console.log("end boo");
// }

// boo();

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex !== -1) {
//     courses.splice(courseIndex, 1);
//   }
// }

// function updateCourse(oldName, newName) {
//   const courseIndex = courses.indexOf(oldName);

//   if (courseIndex !== -1) {
//     courses.splice(courseIndex, 1, newName);
//   }
// }

// addCourse("PM");

// removeCourse("React");

// updateCourse("HTML", "HTML5");

// console.log(courses);

// function getSum(a, b) {
//   return a + b;
// }

// console.log(getSum(1, 5));

// function log(name) {
//   console.log(name);
// }

// function log(name, age) {
//   console.log(name);
// }

// log("Andrii", 40);

function anonymousFunc() {
  console.log(arguments);
}

anonymousFunc();

console.log([]);
