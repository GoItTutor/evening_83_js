/*
  1. Приклади з областями видимості
*/

// -------------------------------//
// let a = 10

// if (true) {

//     const a = 5;
// }

// console.log(a);

// ------------------------------//
// const b = 10;

// if(true){
//     let b = 5;
//     b = 15;
//     console.log(b);
// }
// console.log(b);

// ------------------------------//
// let c = 10;

// if (true) {
//     // let c = 100;
//     c = 1
//     if (true) {
//         // let c = 25;
//         c = 15;

//     }

// }

// console.log(c);

// ------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {

//     total += number;
//     console.log(total);

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

// function expression
// викликається тільки після оголошення

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//     console.log('start foo');
//     console.log('end foo');
// }

// function boo(){
//     console.log('start boo');
//     foo()
//     console.log('end boo');
// }

// boo()

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
