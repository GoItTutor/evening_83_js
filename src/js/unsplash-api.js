export default class UnsplashAPI {
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  #BASE_URL = 'https://api.unsplash.com';

  query = null;
  page = 1;

  fetchPhotos() {
    return fetch(
      `${this.#BASE_URL}/search/photos?client_id=${this.#API_KEY}&query=${
        this.query
      }&page=${this.page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
