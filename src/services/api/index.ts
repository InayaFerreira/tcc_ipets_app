import axios from 'axios';

export const BASE_URL = 'http://api.v2.homolog.buscadordizerodireito.com.br';
export const API_VERSION = '1';

export const api = axios.create({
  baseURL: `${BASE_URL}/v${API_VERSION}`,
});

export const oauth = axios.create({
  baseURL: `${BASE_URL}/oauth`,
});

export interface IBaseResponseMeta {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
      next?: string;
      previous?: string;
    };
  };
}

export interface IBaseResponse<T> {
  success: boolean;
  body: {
    data: T;
    meta?: IBaseResponseMeta;
  };
  message: string;
  exception_message?: string;
}
