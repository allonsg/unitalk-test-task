import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://66a7f07b53c13f22a3d17fb1.mockapi.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
