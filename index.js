/*
  1. Основи об'єктів:
  
  - Призначення
  - Створення об'єктів
  - Формат зберігання даних
  - Додавання та зміна властивостей (різниця між . та [])
  - Shorthand запис властивостей
  - Отримання значень з об'єкту
  - Специфіка типу даних об'єкт - передача за посиланням
  - Перебір for...in
*/

// const isMale = true;

// const user1 = {
//   eyeColor: "green",
//   hairColor: "brown",
//   isMale,
//   // height: 181,
//   // adress: {
//   //   country: "Ukraine",
//   // },
//   // friends: ["Anya", "Sofiya", "Vasyl"],
//   // isMale: true,
// };

// const user2 = user1;

// console.log(user1);
// console.log(user2);

// console.log(user1 === user2);

// user2.country = "Ukraine";

// console.log(user1);
// console.log(user2);

// let a = 1;
// let b = a;

// console.log(a);
// console.log(b);

// a = 10;

// console.log(a);
// console.log(b);

// user.weight = 75;

// user.height = 200;

// const key = "heig";

// user[key + "ht"] = 180;

// console.log(user);
// console.log(user["isMale"]);

// for (let key of user) {
//   console.log(key);

//   console.log(user[key]);
// }

/*
  2. Напиши скрипт, який для об'єкта user послідовно:
  
  - Додає поле mood зі значенням 'happy'
  - Замінює значення hobby на 'skydiving'
  - Замінює значення premium на false
  - Виводить вміст об'єкта user у форматі ключ: значення,
    для цього скористайся Object.keys()
*/

// const user = {
//   hobby: "guitar",
//   premium: true,
//   occupation: "software engineer",
// };

// user.mood = "happy";

// user.hobby = "skydiving";

// user.premium = false;

// console.log(user);

// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// const keysArray = Object.keys(user);

// for (let key of keysArray) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(keysArray);

/*
  3. Метод Object.values()

  Є об'єкт, де зберігаються зарплати нашої команди. Напиши
  функцію getResult для підсумовування усіх зарплат.

  Функція повинна отримувати об'єкт з інформацію про зарплати та
  повертати загальну їх суму.

  Якщо об'єкт salaries порожній, результат має бути 0 
*/

// const salaries = {
//   // Andrii: 3000,
//   // Anna: 1200,
//   // Sofiya: 2000,
// };

// function getResult(salaries) {
//   const values = Object.values(salaries);

//   let salariesSum = 0;

//   for (let salary of values) {
//     salariesSum += salary;
//   }

//   return salariesSum;
// }

// console.log(getResult(salaries));

/*
  4. Масив об'єктів

  Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає
  масив об'єктів та рядок з назвою каменю. 
  
  Функція рахує і повертає загальну вартість каміння з ім'ям stoneName
*/

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Топаз", price: 500, quantity: 10 },
//   { name: "Аквамарин", price: 200, quantity: 8 },
// ];

// function calcTotalPrice(stonesArr, stoneName) {
//   for (let stoneObj of stonesArr) {
//     if (stoneObj.name.toLowerCase() === stoneName.toLowerCase()) {
//       return stoneObj.price * stoneObj.quantity;
//     }
//   }

//   return `Каміння з ім'ям ${stoneName} не має в наявності`;
// }

// console.log(calcTotalPrice(stones, "ТоПаз"));

/*
  5. Методи об'єкта та робота з this
  
  Напиши скрипт управління особистим кабінетом інтернет-банку
  
  Є об'єкт account, в якому необхідно реалізувати методи для роботи
  з балансом та історією транзакцій
*/

// Типів транзакцій лише два:
// Можна покласти чи зняти гроші з балансу
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account1 = {
  // Поточний баланс
  balance: 0,

  // Исторія транзакцій
  transactions: [],

  createTransaction(amount, type) {
    return { amount, type, id: Math.random() };
  },

  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTransaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Зняття суми ${amount} не можливе - недостатньо коштів`);

      return;
    }

    this.balance -= amount;

    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions.push(newTransaction);
  },
};

// console.log(account);

// account.deposit(5000);

// account.withdraw(3000);

// console.log(account);

// const account2 = {
//   balance: 0,
//   transactions: [],
//   createTransaction: account1.createTransaction,
//   deposit: account1.deposit,
//   withdraw: account1.withdraw,

//   showBalance() {
//     console.log(this.balance);
//   },
// };

// console.log(account2.balance);

// account2.deposit(13000);

// console.log(account2.balance);

// Методи які необхнідно реалізувати:

/*
  Метод createTransaction створює та повертає об'єкт транзакції.

  Кожна транзакція - об'єкт з полями id, amount, type

  Приймає суму та тип транзакції.
*/

/*
  Метод deposit, що відповідає за додавання суми до балансу

  Приймає суму транзакції

  Викликає createTransaction для створення об'єкта транзакції
  та занесення його в історію транзакцій
*/

/*
  Метод withdraw, що відповідає за зняття суми з балансу.

  Приймає суму транзакції

  Якщо сума зняття більша за поточний баланс, виводь повідомлення
  про те, що зняття такої суми не можливе - недостатньо коштів
    
  Викликає createTransaction для створення об'єкта транзакції
  та занесення його в історію транзакцій.
*/

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//   },
// };

// const key = prompt(`key`);

// const value = prompt(`value`);

// const obj = {};

// obj[key] = value;

// console.log(obj);
