'use strict';

export default class JSONPlaceholderAPI {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';

  page = 0;
  limit = 30;

  fetchPosts() {
    return fetch(
      `${this.#BASE_URL}/posts?_limit=${this.limit}&_page=${this.page}`
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    });
  }
}
