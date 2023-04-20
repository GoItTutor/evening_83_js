/*
  1. Операція spread як заміна concat і slice
*/

//*  Копія масиву

// const array = [1, 2, 3, 4, 5];

// const newArray = array.concat();

// const newArray = [0, ...array, 6, 7, 8];

// console.log(newArray);

// console.log(array === newArray);

//* Об'єднання масивів через spread замість concat

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9];

// console.log(array1.concat(array2));

// console.log([...array1, ...array2]);

/*
  2. Копія об'єкту

  - Перезапис однакових ключів при копіюванні
*/

// const user = {
//   firstName: "Andrii",
//   lastName: "Shevchuk",
//   age: 30,
//   friends: [],
// };

// const copiedUser = { ...user, hobbies: [] };

// console.log(copiedUser);

// console.log(user === copiedUser);
// console.log(user.friends === copiedUser.friends);

/*
  3. Spread + Rest

  Напишіть функцію getMinNumber яка приймає довільну кількість чисел
  та повертає найменше із них
*/

// function getMinNumber(...args) {
//   console.log(args);

//   return Math.min(...args);
// }

// console.log(getMinNumber(10, 20, 30, -5, 618));

/*

/*
  4. Деструктуризація об'єктів, які проблеми вирішує

  Напишіть деструктуризуюче присвоювання, яке:

  властивість firstName присвоїть у змінну firstName

  властивість age присвоїть у змінну userAge

  властивість isAdmin присвоїть у змінну isAdmin (false, по дефолту
  якщо, у об'єкта данної властивості не буде)

  всі інші властивості зібрати у об'єкт features
*/

// const user = {
//   firstName: "Andrii",
//   lastName: "Shevchuk",
//   age: 30,
//   eyeColor: "green",
//   hobbies: [],
//   // isAdmin: true,
// };

// const {
//   firstName,
//   age: userAge,
//   isAdmin: isUserAdmin = false,
//   hobbies,
//   ...features
// } = user;

// // console.log(user);

// console.log(firstName, userAge, isUserAdmin);
// console.log(features);

/*
  5. Глубока деструктуризація об'єктів

  Потрібно дістати значення усіх властивостей, включно
  з вкладеними у об'єкт langs
*/

// const team = {
//   number: 4,
//   flag: "./images/flag.jpg",
//   employees: ["Anton", "Oleg", "Ronnie", "Carr"],
//   langs: {
//     original: "uk",
//     secondary: "en",
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original, secondary },
// } = team;

// console.log(original, secondary);

/*
  6. Деструктуризація масивів
*/

// const arr = [1, 2, 3, 4, 5];

/*
  Дістати перший та третій елементи масиву, всі інші після 
  третього занести в окремий масив
*/

// const names = [
//   "Herbert Todd",
//   "Belle Soto",
//   "Roger Marsh",
//   "Ethan Lindsey",
//   "Leo Dicaprio",
//   "Arnold Polo",
// ];

// const [first, , third, ...elements] = names;

// console.log(first, third, elements);

/*
  Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34, 0.5];

// const [red, green, blue, alpha = 1] = rgb;

// console.log(red, green, blue, alpha);

/*
  У нас є об'єкт salaries з зарплатами

  Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
  високооплачуваного працівника

  Якщо об'єкт salaries пустий то повернути null

  Якщо декілька людей з одною тою самою зарплатою є найбільш високооплачуваними, 
  можна повернути будь-якого з них
 
  Використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   const entries = Object.entries(salaries);

//   let highestSalary = null;
//   let topPaidEmployee = null;

//   for (let [name, salary] of entries) {
//     if (salary > highestSalary) {
//       highestSalary = salary;
//       topPaidEmployee = name;
//     }
//   }

//   return topPaidEmployee;
// }

// console.log(topSalary(salaries));
/*
  7. Паттерн 'об'єкт параметрів', яку проблему вирішує

  Перепишіть функцію sayHi, щоб вона відповідала заданому паттерну
*/

// function sayHi(name, age, height, weight) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// sayHi(30, 181, 73, `Andrii`);

// function sayHi({ name, age, height, weight }) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// sayHi({ height: 181, age: 30, name: "Andrii", weight: 73 });

// function sayHi([name, age]) {
//   console.log(`Hi, ${name}! Your age is ${age}`);
// }

// sayHi(["Andrii", 30]);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const bookNames = [];

// for (const { title } of books) {
//   bookNames.push(title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const arr = [{ name: "Volodymyr", age: 45 }];

// const [{ age }] = arr;

// console.log(age);

const obj = { friends: ["Andrii", "Anatoliy", "Anton"] };

const {
  friends: [, secondEl],
} = obj;

console.log(secondEl);
