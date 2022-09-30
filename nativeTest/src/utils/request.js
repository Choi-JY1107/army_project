import axios from 'axios';
import requestDomain from './domain.js';

const request = axios.create({ baseURL: requestDomain });
export default request;