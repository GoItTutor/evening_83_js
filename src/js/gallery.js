import UnsplashAPI from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const unsplashInstance = new UnsplashAPI();

const searchFormEl = document.querySelector('.js-search-form');

const inputEl = searchFormEl.firstElementChild;

const galleryWrapperEl = document.querySelector('.js-gallery');

const loadMoreBtnEl = document.querySelector('.js-load-more');

const handleSearchFormSubmit = event => {
  event.preventDefault();

  if (!inputEl.value.trim()) {
    return;
  }

  unsplashInstance.query = inputEl.value;

  inputEl.value = '';

  galleryWrapperEl.innerHTML = '';

  unsplashInstance
    .fetchPhotos()
    .then(data => {
      console.log(data);

      if (data.results.length === 0) {
        console.log('Images not found');

        loadMoreBtnEl.classList.add('is-hidden');

        return;
      }

      galleryWrapperEl.innerHTML = createGalleryCards(data.results);

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(console.warn);
};

const handleLoadMore = () => {
  unsplashInstance.page += 1;

  unsplashInstance
    .fetchPhotos()
    .then(data => {
      if (unsplashInstance.page === data.total_pages) {
        return loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryWrapperEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );

      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(console.warn);
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

loadMoreBtnEl.addEventListener('click', handleLoadMore);
