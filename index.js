// 1. Що буде виведено у консоль ?

// console.log(10 >= "7");

// console.log("2" > "12");

// console.log("2" < "12");

// console.log("4" == 4);

// console.log("6" === 6);

// console.log("false" === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log("0" == false);

// console.log("0" === false);

// console.log("Papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);

/*
  2. Використовуючи конструкцію if...else та prompt, напиши код, який 
  запитуватиме: 'Який стандарт мови JavaScript?'. Якщо користувач вводить
  ECMAScript, то показуй alert з рядком 'Вірно!', інакше - 'Не знаєте? ECMAScript!'
*/

// const resultFromUser = prompt("Який стандарт мови JavaScript?").toLowerCase();

// console.log(resultFromUser);

// if (resultFromUser === "ECMAScript".toLowerCase()) {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

/*
  3. Напиши скрипт, який приводить у консоль рядок 'Це додатнє число', якщо
  в prompt користував ввів число більше за нуль. Якщо було введено нуль,
  виводь у консоль рядок 'Це нуль'. Якщо передали від'ємне число, у консолі
  має бути рядок 'Це від`ємне число'
*/

// const randomNum = Number(prompt("Write your random number"));

// if (randomNum > 0) {
//   console.log("Це додатнє число");
// } else if (randomNum === 0) {
//   console.log("Це нуль");
// } else {
//   console.log("Це від`ємне число");
// }

/*
  4. Напиши скрипт, який перевіряє чи закінчується значення змінної link
  символом '/'. Якщо ні, додай у кінець посилання цей символ  
*/

// let link = "https://instagram.com/andrii_shevchukk";

// if (!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);

/*
  5. Напиши скрипт для відображення дедлайну - часу здачі проєкту. Використовуй
  конструкцію switch...case

  Якщо до дедлайну 0 днів - виведи рядок 'Cьогодні'
  Якщо до дедлайну 1 день - виведи рядок 'Завтра'
  Якщо до дедлайну 2 дні - виведи рядок 'Післязавтра'
  Якщо до дедлайну 3+ днів - виведи рядок 'Можна відпочити :)'
*/

// const daysLeft = 5;

// switch (daysLeft) {
//   case 0:
//     console.log("Cьогодні");
//     break;

//   case 1:
//     console.log("Завтра");
//     break;

//   case 2:
//     console.log("Післязавтра");
//     break;

//   default:
//     console.log("Можна відпочити :)");
//     break;
// }

/*
  6. Напиши скрипт котрий порахує суму чисел від 1 до 10 та виведе у консоль результат 
*/

// let counter = 1;

// let sum = 0;

// while (counter <= 10) {
//   sum += counter;

//   counter += 1;
// }

// console.log(sum);

/*
  7. Напиши цикл for який виводить у консоль браузера числа за зростанням від
  min дo max, але якщо число кратне 5
*/

// debugger;

// let sum = 0;

// for (let counter = 1; counter <= 10; counter += 1) {
//   sum += counter;
// }

// console.log(sum);

// const min = 20;

// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// debugger;

// for (let i = min; true; i += 1) {
//   if (i === max + 1) {
//     break;
//   }

//   console.log(i);
// }

/*
  8. Напишіть скрипт який порахує скільки на проміжку від from до to було чисел,
  які є кратними 7
*/

// const from = 7;

// const to = 20;

// let counter = 0;

// for (let i = from; i <= to; i += 1) {
//   if (i % 7 === 0) {
//     counter += 1;
//   }
// }

// console.log(counter);

/* 
  9. Напишіть скрипт для світлофора, де користувач може ввести назву кольору
  у prompt і в залежності від того який був введений колір відображатимуться
  різні повідомлення через alert. Використовуй конструкцію switch case
  
  red - 'STOP!!!!'

  green - 'GO!'

  yellow - 'Wait a little!'
*/

// const colorFromUser = prompt("Write your the svitlofor color");

// switch (colorFromUser.toLowerCase()) {
//   case "red":
//     alert("STOP!!!!");
//     break;

//   case "green":
//     alert("GO!");
//     break;
//   case "yellow":
//     alert("Wait a little!");
//     break;
// }

/*
  10. Напиши скрипт який буде просити нас ввести число більше за 100, доки
  ми таке не введемо
    
  Скористайся циклом while
*/

// let numberFromUser = null;

// while (+numberFromUser < 100) {
//   numberFromUser = prompt("Write number that is bigger than 100");
// }

// for (let numberFromUser = null; +numberFromUser < 100; ) {
//   numberFromUser = prompt("Write number that is bigger than 100");
// }

// console.log(1);

// debugger;

// console.log(2);
