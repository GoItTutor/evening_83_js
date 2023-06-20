'use strict';

/*
 * Method (GET).
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// const getUsers = () =>
//   fetch(`${BASE_URL}/users`, { method: 'GET' }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

const getUsers = () => axios.get(`${BASE_URL}/users`);

getUsers()
  .then(({ data }) => {
    console.log(data);
  })
  .catch(err => {
    console.warn(err);
  });
