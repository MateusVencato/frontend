import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omni-back-end.herokuapp.com',
});

export default api;