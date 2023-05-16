/*
  5. Метод document.createElement('tagname')

  Створити картку галереї і вставити у елемент з класом gallery:

  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// const galleryEl = document.querySelector(".gallery");

// const listItemEl = document.createElement("li");

// listItemEl.classList.add("gallery-item");

// const anchorLinkEl = document.createElement("a");

// anchorLinkEl.href = "#";

// listItemEl.append(anchorLinkEl);

// const imgEl = document.createElement("img");

// imgEl.src = "https://picsum.photos/id/237/200/300";
// imgEl.alt = "Labrador";

// anchorLinkEl.append(imgEl);

// galleryEl.prepend(listItemEl);

/* 
  6. Властивості innerHtml і textContent

  Створити картку галереї і вставити у елемент з класом gallery:

  <li class="gallery-item">
    <h1>Some text</h1>
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// const galleryEl = document.querySelector(".gallery");

// galleryEl.innerHTML += `<li class="gallery-item">
//     <h1>Some text</h1>
//     <a href="#">
//       <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
//     </a>
//   </li>`;

/*
  7. Створити галерею і вставити у елемент з класом gallery через
  метод elem.insertAdjacementHTML :)

  Розмітка картки:

  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// const galleryEl = document.querySelector(".gallery");

// galleryEl.children[1].insertAdjacentHTML(
//   `afterbegin`,
//   `<li class="gallery-item">
//     <a href="#">
//       <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
//     </a>
//   </li>`
// );

const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

// Написати функцію яка створить розмітку картки

const galleryEl = document.querySelector(".gallery");

const makeGalleryCard = ({
  width,
  height,
  url,
  alt,
}) => `<li class="gallery-item">
    <a href="#">
      <img src="${url}" alt="${alt}" width="${width}" height="${height}"> 
    </a>
  </li>`;

// Cтворити масив із розмітки і вставити у список .gallery

// const galleryCardsList = pictures.map((el) => makeGalleryCard(el));

// galleryEl.insertAdjacentHTML("afterbegin", galleryCardsList.join(""));

const listItemsEls = document.querySelectorAll(".item");

console.log(listItemsEls);

listItemsEls.forEach((el) => {
  console.log(el);
});
