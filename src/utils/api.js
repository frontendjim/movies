import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '69b1a6ee5fb20ade10f1288f6c8b510c',
  },
});
