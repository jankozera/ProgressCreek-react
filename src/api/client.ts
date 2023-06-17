import axios from 'axios';
import {authService} from './authService';

const URL = 'http://localhost:8000/api';

const client = axios.create({
  baseURL: URL,
});

client.interceptors.request.use(function(config) {
  config!.headers!.Authorization = `Bearer ${authService.tokenValue}`;
  return config;
});

client.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.config && error.response && error.response.status === 401) {
    authService.refreshAccessToken().then((res) => {
      error.config.headers.Authorization = `Bearer ${authService.tokenValue}`;
      return axios.request(error.config);
    });
  }
  return Promise.reject(error);
});

export default client;
