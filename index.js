/*
  Виведіть у консоль загальну кількість яблук та винограду та їх різницю
*/

// const apples = 47;

// const grapes = 135;

// console.log(apples + grapes);
// console.log(apples - grapes);

// console.log(apples, grapes);

// const name

// name = 55453;

// console.log(name);

/*
  Заміни вираз перевизначення комбінованим оператором +=
*/

// let students = 100;

// students = students + 50;
// students %= 50;

// console.log(students);

/*
  Розбери пріоритет операторів в інструкції присвоєння
*/

// const result = 108 + (223 - 2) * 5;

// console.log(result);

/*
  Напиши скрипт, який виводить у консоль заокруглені значення value

  Використовуй методи Math.round(), Math.floor(), Math.ceil()

  Перевірте, що буде в консолі при значеннях 27.3 та 27.9
*/

// const value = `27.9px`;

// console.log(Math.round(value));
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.trunc(value));

/*
  Склади за допомогою шаблонних рядків речення: A has B bots in stock,
  де A та В - змінні вставлені в рядок
*/

// const companyName = "Cyberdyne Systems";

// const repairBots = 150;

// const defenceBots = 50;

// const result =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock";

// const result = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(result);

/*
  Методи рядків та чейнінг

  Напиши скрипт, який розраховує індекс маси тіла людини

  Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах

  Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання)

  Нецілі числа можуть бути задані у вигляді 24.7 або 24,7 тобто як роздільник дробної частини числа може бути кома

  Індекс маси тіла необхідно округлити до однієї цифри після коми
  */

// const weight = "88,3";
// const height = "1.98";

// const validWeight = Number(weight.replace(",", "."));
// const validHeight = Number(height.replace(",", "."));
// const validWeight = +weight.replace(",", ".");
// const validHeight = +height.replace(",", ".");

// console.log(validWeight);
// console.log(validHeight);

// const bmi = +(validWeight / validHeight ** 2).toFixed(1);

// console.log(bmi);

// const name = prompt("Write your age");

// console.log(`Hello!`);

// alert(`Hello!`);

// const greeting = "Hello, Anya!";

// const result = greeting.replace(",", ".").toLowerCase().toUpperCase();

// console.log(result);

// const isAdult = confirm("Is your age bigger than 18 or equal?");

// console.log(isAdult);

// console.log(1);

// alert(55 + 105);

// console.log(2);

// console.log(`Andrii`);

// console.log(5 === 5);
