import axios from 'axios';

export const BASE_URL = 'https://petzapi.herokuapp.com';

export const api = axios.create({
  baseURL: `${BASE_URL}`,
});
