import { create } from 'apisauce';

const api = create({
  baseURL: 'http://192.168.56.1:3000/',
  timeout: 8000
});

export default api;
