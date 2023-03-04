import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fox-anima.herokuapp.com',
});
