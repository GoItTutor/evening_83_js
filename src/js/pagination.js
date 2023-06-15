'use strict';

import createPostsCards from '../templates/posts.hbs';

import JSONPlaceholderAPI from './jsonplaceholder-api';

const TOTAL_POSTS_COUNT = 100;

const JSONPlaceholderApi = new JSONPlaceholderAPI();

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = postsWrapperEl.nextElementSibling;

const handleFetchPosts = () => {
  JSONPlaceholderApi.page += 1;

  if (TOTAL_POSTS_COUNT / JSONPlaceholderApi.limit <= JSONPlaceholderApi.page) {
    loadMoreBtnEl.remove();
  }

  JSONPlaceholderApi.fetchPosts()
    .then(data => {
      postsWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(console.warn);
};

handleFetchPosts();

loadMoreBtnEl.addEventListener('click', handleFetchPosts);
