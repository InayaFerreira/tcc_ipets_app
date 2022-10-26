import axios from 'axios';

export const BASE_URL = '';
export const API_VERSION = '1';

export const api = axios.create({
  baseURL: `${BASE_URL}/v${API_VERSION}`,
});
