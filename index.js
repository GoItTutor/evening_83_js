/*
  1. Об'єкти window та document

  Cучасні методи пошуку елементів (querySelector, querySelectorAll)

  Поняття вузлів та їх типи

  Представлення документу як дерева об'єктів
  
  Навігація по DOM дереву (children, etc.)
*/

// const paragraphEl = document.querySelector(".description");

// console.log((paragraphEl.style.color = "red"));

// const listItemsEls = document.querySelectorAll(".fail");

// console.log(listItemsEls);

// const containerEl = document.querySelector(".container");

// console.dir(containerEl);

// console.dir(containerEl.firstElementChild.parentElement);

/* 
  2. Доступ до атрибутів у елемента

  elem.attributes
  elem.hasAttribute(name)
  elem.getAttribute(name)
  elem.setAttribute(name, value)
  elem.removeAttribute(name)

  доступ до атрибуту через .

  show on img with class some-img
*/

// const imgEl = document.querySelector(".some-img");

// console.log(imgEl.getAttribute("checked"));

// imgEl.setAttribute("src", "https://picsum.photos/id/155/200/300");

// imgEl.removeAttribute("src");

// console.log(imgEl.title);

// imgEl.src = "https://picsum.photos/id/156/200/300";

/*
  3. Об'єкт style, властивість cssText

  show on heading with class main-title
*/

// const headingEl = document.querySelector(".main-title");

// headingEl.style.color = "green";
// headingEl.style.backgroundColor = "red";

// headingEl.style.cssText = "color: green; background-color: red";

/*
  4. Об'єкт classList та його методи (add, remove, toggle, contains)

  take dissapear and red classes from main.css
*/

const imgEl = document.querySelector(".some-img");

console.log(imgEl);

// imgEl.classList.add("dissapear");

// imgEl.classList.remove("dissapear");

// imgEl.classList.toggle("dissapear");
// imgEl.classList.toggle("dissapear");

console.log(imgEl.classList.contains("somedasdas-img"));
