import axios from 'axios';

const URL = 'http://localhost:8000/api';

const client = axios.create({
  baseURL: URL,
});

export default client;
