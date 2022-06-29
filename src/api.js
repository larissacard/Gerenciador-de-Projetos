import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-brisa-nodejs-postgresql.herokuapp.com/',
  });

export default api;