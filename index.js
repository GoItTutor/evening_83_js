// Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
  1. Метод map

  Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів
*/

// const getModels = (arr) => arr.map((el) => el.model);

// console.log(cars);

// console.log(getModels(cars));

/*
  2. Метод map

  Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним 
  значенням властивості price залежно від переданої знижки
*/

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(({ price, ...rest }) => ({ price: price - discount, ...rest }));

// console.table(cars);

// console.table(makeCarsWithDiscount(cars, 2000));

/*
  3. Метод filter
  
  Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за 
  значення параметра threshold
*/

// const filterByPrice = (cars, threshold) =>
//   cars.filter((el) => el.price < threshold);

// console.table(cars);
// debugger;

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
  4. Метод filter

  Нехай функція getCarsOnSale повертає масив автомобілів властивість onSale яких true
*/

// const getCarsOnSale = (cars) =>
//   cars.filter(({ onSale, make }) => onSale);

// console.table(cars);
// console.table(getCarsOnSale(cars));

/*
  5. Метод filter

  Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається 
  зі значенням параметра type
*/

// const getCarsWithType = (cars, type) => cars.filter((el) => el.type === type);

// console.table(cars);
// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

/*
  6. Метод find

  Нехай функція getCarByModel повертає об'єкт автомобіля властивість model
  якого та параметр model однакові
*/

// const getCarByModel = (cars, model) => cars.find((el) => el.model === model);

// debugger;
// console.log(getCarByModel(cars, "F-15043242"));
// console.log(getCarByModel(cars, "CX-9"));

/*
  7. Метод sort
  
  Нехай функція sortByAscendingAmount повертає НОВИЙ масив автомобілів відсортований 
  за збільшенням значення властивості amount
*/

// const numbers = [1, 618, 7, 9, 5, 0];

// const result = [...numbers].sort((a, b) => {
//   return b - a;
// });

// console.log(result);

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));
// console.table(cars);

/*
  8. Метод sort

  Нехай функція sortByModel повертає НОВИЙ масив автомобілів відсортований за назвою 
  моделі в алфавітному або зворотньому алфавітному порядку, залежно від значення параметра order

  - localeCompare
*/

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     if (order === "asc") {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });

// console.table(cars);
// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, 'desc'));

/*
  9. Метод reduce
  
  Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount)
*/

// 1: acc - 0; amount - 14
// 2: acc - 14; amount - 2
// 2: acc - 16; amount - 8
// 2: acc - 24; amount - 8

// debugger;
// const getTotalAmount = (cars) =>
//   cars.reduce((acc, el) => {
//     acc.push(el.model);

//     return acc;
//   }, []);

// console.table(cars);

// console.log(getTotalAmount(cars));

/*
  10. Ланцюжки методів
  
  Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
*/

// const getAvailableCarNames = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(cars);
// console.log(getAvailableCarNames(cars));

// const arr = [2, 2, 3, 4, 3];

// debugger;
// const result = arr.filter((el, index, arr) => index === arr.indexOf(el));

// console.log(result);

// const arr = [{ a: 1 }];

// const newArray = arr.filter(() => true).map((el) => ({ ...el }));

// console.log(newArray === arr);
// console.log(arr[0] === newArray[0]);

// console.log([1, 2, 3, 4, 5].every((value, index, array) => value >= 0));
