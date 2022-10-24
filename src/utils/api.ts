import { API_VERSION, BASE_URL } from '@services/api';

export const encodeParams = (params: any) => {
  return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
};

export const removeBaseUrl = (url: string): string => {
  return url.replace(`${BASE_URL}/api/v${API_VERSION}`, '');
};
