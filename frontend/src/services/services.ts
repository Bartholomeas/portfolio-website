import axios from 'axios';
import { API_URL } from '../utils/variables';

const api = axios.create({ baseURL: API_URL });

export const getAllPosts = () =>
  api.get('/api/blog-posts').then(({ data }) => data);
